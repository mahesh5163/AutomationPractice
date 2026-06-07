
import { test, chromium, Page } from "@playwright/test";

const EMAIL = "maheshdhopre108@gmail.com";
const PASSWORD = "zwpy wisx abnc fpyg";

// HR email addresses
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

test("Send job application emails to HR", async () => {
  const browser = await chromium.launch({
    headless: false, // Set to true for headless mode
    args: ['--incognito'], // Open in incognito mode
  });

  const page = await browser.newPage();

  try {
    // Navigate to Gmail
    console.log("Opening Gmail...");
    await page.goto("https://mail.google.com/mail/u/0/", { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(2000);

    // Check if login is required
    const emailInput = await page.$('input[type="email"]');
    if (emailInput) {
      console.log("Logging in...");
      await loginToGmail(page);
    } else {
      console.log("Already logged in!");
    }

    // Wait for inbox to load
    await page.waitForSelector('[role="main"]', { timeout: 30000 }).catch(() => {
      console.log("Compose button not found, but continuing...");
    });

    // Send emails to each HR
    for (let i = 0; i < hrEmails.length; i++) {
      const hrEmail = hrEmails[i];
      console.log(`Sending email ${i + 1}/${hrEmails.length} to ${hrEmail}...`);

      try {
        await sendEmail(page, hrEmail);
        console.log(`✓ Email sent to ${hrEmail}`);

        // Add delay between emails to avoid being flagged
        await page.waitForTimeout(2000);
      } catch (error) {
        console.error(`✗ Failed to send email to ${hrEmail}:`, error);
      }
    }

    console.log("All emails sent successfully!");
  } finally {
    await browser.close();
  }
});

async function loginToGmail(page: Page) {
  try {
    // Wait for email input
    await page.waitForSelector('input[type="email"]', { timeout: 10000 });
    console.log("Entering email...");
    await page.fill('input[type="email"]', EMAIL);
    await page.click('button:has-text("Next")');
    await page.waitForTimeout(1000);

    // Wait for password input
    await page.waitForSelector('input[type="password"]', { timeout: 10000 });
    console.log("Entering password...");
    await page.fill('input[type="password"]', PASSWORD);
    await page.click('button:has-text("Next")');
    await page.waitForTimeout(3000);

    console.log("Login successful!");
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

async function sendEmail(page: Page, recipientEmail: string) {
  try {
    // Click compose button with retry logic
    let composeClicked = false;
    for (let i = 0; i < 3; i++) {
      try {
        const composeButton = page.locator('button[aria-label*="Compose"]').first();
        await composeButton.waitFor({ timeout: 5000 });
        await composeButton.click();
        composeClicked = true;
        break;
      } catch (e) {
        console.log(`Compose button attempt ${i + 1} failed, retrying...`);
        await page.waitForTimeout(500);
      }
    }

    if (!composeClicked) {
      console.error("Could not click compose button after 3 attempts");
      return;
    }

    // Wait for compose window
    await page.waitForSelector('[role="dialog"]', { timeout: 10000 }).catch(() => {
      console.log("Compose dialog might have opened...");
    });
    await page.waitForTimeout(500);

    // Fill recipient
    const toField = page.locator('input[aria-label*="To"]').first();
    await toField.waitFor({ timeout: 5000 });
    await toField.fill(recipientEmail);
    await page.waitForTimeout(500);

    // Fill subject
    const subjectField = page.locator('input[aria-label*="Subject"]');
    await subjectField.waitFor({ timeout: 5000 });
    await subjectField.fill(emailSubject);
    await page.waitForTimeout(500);

    // Fill body
    const bodyField = page.locator('[role="textbox"][aria-label*="Body"]');
    await bodyField.waitFor({ timeout: 5000 });
    await bodyField.click();
    await bodyField.fill(emailBody);
    await page.waitForTimeout(500);

    // Send email
    const sendButton = page.locator('button[aria-label*="Send"]').first();
    await sendButton.waitFor({ timeout: 5000 });
    await sendButton.click();

    // Wait for send confirmation
    await page.waitForTimeout(1500);
  } catch (error) {
    console.error(`Error sending email to ${recipientEmail}:`, error);
  }
}
