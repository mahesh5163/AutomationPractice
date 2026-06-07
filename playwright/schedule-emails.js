const nodemailer = require("nodemailer");
const schedule = require("node-schedule");

const EMAIL = "maheshdhopre108@gmail.com";
const APP_PASSWORD = "enter-your-app-password-here";

const hrEmails = [
  "hr1@company1.com",
  "hr2@company2.com",
  "hr3@company3.com",
  "hr4@company4.com",
  "hr5@company5.com",
  "hr6@company6.com",
  "hr7@company7.com",
  "hr8@company8.com",
  "hr9@company9.com",
  "hr10@company10.com",
  "hr11@company11.com",
  "hr12@company12.com",
  "hr13@company13.com",
  "hr14@company14.com",
  "hr15@company15.com",
  "hr16@company16.com",
  "hr17@company17.com",
  "hr18@company18.com",
  "hr19@company19.com",
  "hr20@company20.com",
  "hr21@company21.com",
  "hr22@company22.com",
  "hr23@company23.com",
  "hr24@company24.com",
  "hr25@company25.com",
  "hr26@company26.com",
  "hr27@company27.com",
  "hr28@company28.com",
  "hr29@company29.com",
  "hr30@company30.com",
  "hr31@company31.com",
  "hr32@company32.com",
  "hr33@company33.com",
  "hr34@company34.com",
  "hr35@company35.com",
  "hr36@company36.com",
  "hr37@company37.com",
  "hr38@company38.com",
  "hr39@company39.com",
  "hr40@company40.com",
  "hr41@company41.com",
  "hr42@company42.com",
  "hr43@company43.com",
  "hr44@company44.com",
  "hr45@company45.com",
  "hr46@company46.com",
  "hr47@company47.com",
  "hr48@company48.com",
  "hr49@company49.com",
  "hr50@company50.com"
];

const emailSubject = "Application for Software Test Engineer (QA) - Mahesh Dhopre";
const emailBody = `Dear team,

I am Mahesh Dhopre. I have 4+ years of experience of automation testing on healthcare Domain, Insurance and banking domain, e-Commerce. Please consider this email as my interest for the post of 'Software Test Engineer' (QA). My skill set seems to be a perfect match.

I attached my resume in this email.

Please review the same and I would be happy to hear back from you regarding this opportunity.

Thanks & Regards,
Mahesh
Mobile: +91-7066850747`;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: APP_PASSWORD,
  },
});

async function sendEmailToHR(email, index, total) {
  try {
    console.log(`[${index}/${total}] Sending email to ${email}...`);
    await transporter.sendMail({
      from: `Mahesh <${EMAIL}>`,
      to: email,
      subject: emailSubject,
      text: emailBody,
    });
    console.log(`✓ Email sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to send email to ${email}: ${error.message}`);
    return false;
  }
}

async function sendAllEmails() {
  console.log(`\n📧 Starting email sending at ${new Date().toLocaleString()}...\n`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < hrEmails.length; i++) {
    const success = await sendEmailToHR(hrEmails[i], i + 1, hrEmails.length);
    if (success) successCount++;
    else failCount++;
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log(`\n✓ Process completed at ${new Date().toLocaleString()}`);
  console.log(`✓ Sent: ${successCount}/${hrEmails.length}`);
  if (failCount > 0) console.log(`✗ Failed: ${failCount}\n`);
}

// Schedule email sending daily at 9:00 AM
const job = schedule.scheduleJob('0 9 * * *', async () => {
  await sendAllEmails();
});

console.log("✓ Email scheduler started!");
console.log("📧 Will send emails daily at 9:00 AM");
console.log("Press Ctrl+C to stop the scheduler\n");
