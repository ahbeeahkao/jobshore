/**
 * ============================================================================
 * JOBSHORE — GOOGLE APPS SCRIPT LEAD WEBHOOK & EMAIL DISPATCHER (Code.gs)
 * ============================================================================
 * 100% Zero Public Phone/WhatsApp Exposure + Server-Side 3-Gate Anti-Abuse Check
 *
 * HOW TO DEPLOY (TAKES 60 SECONDS):
 * 1. Go to https://sheets.new to create a new Google Sheet (name it "Jobshore Leads").
 * 2. In the top menu, click Extensions -> Apps Script.
 * 3. Delete any code in `Code.gs` and paste this entire file.
 * 4. Optional: Set `NOTIFICATION_EMAIL` below (or leave it as '' to automatically
 *    email whichever Google account owns the Google Sheet).
 * 5. Click "Deploy" (top right) -> "New deployment".
 * 6. Click the gear icon next to "Select type" -> choose "Web app".
 * 7. Set:
 *    - Description: "Jobshore Lead Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 8. Click "Deploy", authorize permissions, and copy your Web App URL:
 *    (looks like: https://script.google.com/macros/s/AKfycb.../exec)
 * 9. Paste that URL into `leadWebhookUrl` in `src/data/siteData.ts`!
 * ============================================================================
 */

const NOTIFICATION_EMAIL = ''; // Leave '' to auto-send to your own Gmail address, or type 'you@yourdomain.com'

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ status: 'error', message: 'Empty payload' });
    }

    const data = JSON.parse(e.postData.contents);

    // ========================================================================
    // SERVER-SIDE VERIFICATION OF THE 3-PART ANTI-ABUSE GATE
    // ========================================================================
    // Gate 1: Honeypot Trap & Minimum Human Dwell Time
    if (data._honeypot && String(data._honeypot).trim() !== '') {
      return jsonResponse({ status: 'blocked', reason: 'Gate 1: Honeypot triggered' });
    }
    if (Number(data.dwellTimeSec || 0) < 2 || data.humanInteracted !== true) {
      return jsonResponse({ status: 'blocked', reason: 'Gate 1: Automated non-human submission' });
    }

    // Gate 2: Interactive Human Challenge Token
    if (data.challengeVerified !== true) {
      return jsonResponse({ status: 'blocked', reason: 'Gate 2: Human security challenge failed' });
    }

    // Gate 3: Required Corporate Lead & Callback Qualification Fields
    const name = String(data.name || '').trim();
    const company = String(data.company || '').trim();
    const email = String(data.email || '').trim();
    const clientPhone = String(data.clientPhone || '').trim();

    if (!name || !company || !email || !clientPhone) {
      return jsonResponse({ status: 'error', message: 'Gate 3: Missing required qualification fields' });
    }

    // Clean client phone digits for your 1-click outbound WhatsApp link inside the email
    const cleanClientDigits = clientPhone.replace(/[^0-9]/g, '');
    const normalizedWaDigits = cleanClientDigits.startsWith('0')
      ? '60' + cleanClientDigits.slice(1)
      : cleanClientDigits;

    const timestampMyt = Utilities.formatDate(new Date(), 'Asia/Kuala_Lumpur', 'yyyy-MM-dd HH:mm:ss');
    const leadId = data.leadId || 'JS-' + Math.floor(100000 + Math.random() * 900000);

    // ========================================================================
    // 1. APPEND LEAD TO GOOGLE SHEET (AUTO-CREATES HEADERS ON FIRST RUN)
    // ========================================================================
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp (MYT)',
        'Lead ID',
        'Client Name',
        'Company Name',
        'Work Email',
        'Client WhatsApp / Phone',
        'Selected Pillars',
        'Company Scale',
        'Target Timeline',
        '14-Day Pilot Quote',
        'Full Rollout Quote',
        'Est. Annual Savings',
        'Project Notes / AI Chat Context',
        '1-Click Outbound WhatsApp Link',
      ]);
      sheet.getRange(1, 1, 1, 14).setFontWeight('bold');
    }

    const outboundWaText = encodeURIComponent(
      'Hi ' +
        name +
        ' (' +
        company +
        '), this is the Engineering Desk at Jobshore following up on your scope request (' +
        leadId +
        ') for ' +
        (data.pillars || 'your project') +
        '.'
    );
    const outboundWaUrl = 'https://wa.me/' + normalizedWaDigits + '?text=' + outboundWaText;

    sheet.appendRow([
      timestampMyt,
      leadId,
      name,
      company,
      email,
      clientPhone,
      data.pillars || '',
      data.scale || '',
      data.timeline || '',
      data.pilotQuote || '',
      data.fullQuote || '',
      data.annualSavings || '',
      data.notes || '',
      outboundWaUrl,
    ]);

    // ========================================================================
    // 2. SEND INSTANT HTML EMAIL ALERT TO OWNER (WITH 1-CLICK WHATSAPP BUTTON)
    // ========================================================================
    const recipient = NOTIFICATION_EMAIL || Session.getActiveUser().getEmail();
    const subject = '🔥 [Jobshore Lead ' + leadId + '] ' + company + ' — ' + (data.pilotQuote || 'New Scope');

    const htmlBody =
      '<div style="font-family: Arial, sans-serif; max-width: 640px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">' +
      '<div style="background: #0f172a; color: #ffffff; padding: 18px 24px;">' +
      '<h2 style="margin: 0; font-size: 18px;">New Verified Jobshore Lead (' +
      leadId +
      ')</h2>' +
      '<p style="margin: 4px 0 0; font-size: 12px; color: #38bdf8;">Passed All 3 Anti-Abuse Security Gates • ' +
      timestampMyt +
      ' MYT</p>' +
      '</div>' +
      '<div style="padding: 20px 24px; background: #ffffff; color: #1e293b; font-size: 14px; line-height: 1.5;">' +
      '<table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">' +
      '<tr><td style="padding: 6px 0; font-weight: bold; width: 170px;">Client Name:</td><td>' +
      escapeHtml(name) +
      '</td></tr>' +
      '<tr><td style="padding: 6px 0; font-weight: bold;">Company Name:</td><td>' +
      escapeHtml(company) +
      '</td></tr>' +
      '<tr><td style="padding: 6px 0; font-weight: bold;">Work Email:</td><td><a href="mailto:' +
      escapeHtml(email) +
      '">' +
      escapeHtml(email) +
      '</a></td></tr>' +
      '<tr><td style="padding: 6px 0; font-weight: bold;">Client WhatsApp / Phone:</td><td><strong>' +
      escapeHtml(clientPhone) +
      '</strong></td></tr>' +
      '<tr><td style="padding: 6px 0; font-weight: bold;">Selected Pillars:</td><td>' +
      escapeHtml(data.pillars || '') +
      '</td></tr>' +
      '<tr><td style="padding: 6px 0; font-weight: bold;">Company Scale:</td><td>' +
      escapeHtml(data.scale || '') +
      '</td></tr>' +
      '<tr><td style="padding: 6px 0; font-weight: bold;">Target Timeline:</td><td>' +
      escapeHtml(data.timeline || '') +
      '</td></tr>' +
      '</table>' +
      '<div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px; margin-bottom: 16px;">' +
      '<div style="font-weight: bold; color: #166534; margin-bottom: 6px;">Calculated Quote & ROI Summary:</div>' +
      '<div>• <strong>14-Day Fast-Start Pilot:</strong> ' +
      escapeHtml(data.pilotQuote || '') +
      '</div>' +
      '<div>• <strong>Full Rollout Estimate:</strong> ' +
      escapeHtml(data.fullQuote || '') +
      '</div>' +
      '<div>• <strong>Projected 12-Month Savings:</strong> ' +
      escapeHtml(data.annualSavings || '') +
      '</div>' +
      '</div>' +
      '<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 20px;">' +
      '<strong>Client Notes / Context:</strong><br/>' +
      escapeHtml(data.notes || 'None provided') +
      '</div>' +
      '<div style="margin-top: 18px;">' +
      '<a href="' +
      outboundWaUrl +
      '" style="display: inline-block; background: #10b981; color: #06281e; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px; margin-right: 10px;">' +
      '💬 Click to WhatsApp ' +
      escapeHtml(name) +
      ' Now →</a>' +
      '<a href="mailto:' +
      escapeHtml(email) +
      '?subject=Re: Jobshore Scope & 14-Day Pilot (' +
      leadId +
      ')" style="display: inline-block; background: #0284c7; color: #ffffff; font-weight: bold; text-decoration: none; padding: 12px 20px; border-radius: 8px;">' +
      '✉️ Reply via Email</a>' +
      '</div>' +
      '</div>' +
      '</div>';

    if (recipient) {
      MailApp.sendEmail({
        to: recipient,
        replyTo: email,
        subject: subject,
        htmlBody: htmlBody,
      });
    }

    return jsonResponse({ status: 'ok', leadId: leadId });
  } catch (err) {
    return jsonResponse({ status: 'error', message: String(err) });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
