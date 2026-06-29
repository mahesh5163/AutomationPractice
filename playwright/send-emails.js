const nodemailer = require("nodemailer");

const EMAIL = "maheshdhopre108@gmail.com";
const APP_PASSWORD = "zwpy wisx abnc fpyg";

//const EMAIL = "pratikshapowar1006@gmail.com";
//const APP_PASSWORD = "iexx iylo busy ngfn"; // Get from Google Account

const hrEmails =["Rakesh.G2@cyient.com","Anaghabharat.Maske@cyient.com","Yaddanapudi.Tanuja@cyient.com","Varaprasad.Konagantla@cyient.com","manikandan.B@ltm.com","shivam.tripathi2@globallogic.com","yash.amul-khandagale@capgemini.com","shaelias@deloitte.com","priscilla.lai@wipro.com","swathi@sharpgts.com","chennai@brraysoft.com","vardhan@urpantech.com","m.morsi@icon-eg.com","hrm@logfixscm.com","dharmendar.singh@tekinspirations.com","shireen.fathima@xaxissolutions.com","tishitha@glaubentechnology.com","heba.zaki@elsoadaa.com","sam@keshavconsulting.com","shailja@archerta.com","marketing@manpower.com.my","hr2@applycup.com","contact@recruitmenthub365.com","hrd11@venpastaffing.com","priyanaidu@thesancloud.com","himani.patankar@quickshift.in","avinash.s@theveritashealthcare.net","info@satashiyandtinstitute.com","sandhya@spinoinc.com","akash1@tekshapers.com","hr@aetrico.in","swethav2@hexaware.com","amans@quantumtechinc.com","enna.ng@sliconsulting.com.ph","akash.jain@cogentinfo.com","sourav.dawn@infojiniconsulting.com","sharad.saxena@infogain.com","manu@zecdata.com","hr@jayshaktimetals.com","lalitha.s@bct-consulting.com","sivani.s@voltoconsulting.com","mohit.singh@signinsol.com","Venkat.gudala@pamten.com","saikumar.gandham@accordinnovations.com","ta@phoenixinfosolution.com","neha.sharma@testingxperts.com","kritika.negi@idctechnologies.com","jyothi@costaffglobal.com","preeti.verma@qplusstaffing.com","hr@keirinsofttech.com","shreya.gupta@stmpl.co.in","nadia.f@aowstech.com","Pranjal.Pandey@impactqa.com","tatheer.khan@atxlearning.com","anshu@gracehire.com","hr@elnax.in","uday@innorev.com","kapil.awana@walkingtree.tech","yaswanth.yash@srivango.com","arun.kumar@tekfortune.com","Mahesh.com@saranshinc.com","Mounika.a@costaffglobal.in","janet.giles@jobzoneonline.com","sowmiya.gandhi@srivango.com","madhavi.latha@vhspro.net","ashish@rpainfotech.com","anchal.singh@vizlogic.com","akanksha@acetechnologies.com","yaswanth.s@msrcosmos.com","recruitment@algeemi.com","resume@webreinvent.com","venkateswarlu.yadla@cognizant.com","banika.wazir@programming.com","karanbir.singh@testingxperts.com","hr@divergentsl.com","bhuvana@prorsum-tech.com","komal@lavutechsolutions.com","vinish@exalansandhunar.com","devamadhav.goriparthi@dprsolutionsinc.com","trivendra.ch@innorav.com","hello@forrof.io","kjnaveen@elitez.in","mansi.aggarwal@careedge.in","swathi@spadtek.com","sumitha@spc-services.net","hr@mhoelectric.com","faozymonny.hiring.process@proton.me","khadar@kksoftwareassociates.com","Varun@accordinnovations.com","vinay@pixelitcenter.com","hr1@accurategauging.com","rupak.kumar@smartitframe.com","career@huquo.com","dhanush.sudhakaran@ascendion.com","Neha.Chourasiya@ltm.com","drishyar@chiselontechnologies.com","anand@pixelitcenter.com","gopinath.t@sunovaa.com","liz.joshy@ust.com","thirawut@zimpligital.com","hr@anantgroup.com","ushasree.com@costaffglobal.in","mishra.neha@smsoftconsulting.com","rishitha.aynaparthi@madhees.com","komathi.k@smartitframe.com","ramya@franklininfo.net","hr@synctric.io","dharani.chilukuri@madhees.com","shan@gandivainsights.com","Shiva.com@nygci.com","Reena@urbanfeatconsulting.com","hr@mastersoftwaresolutions.com","d.pattanaik@mrtechnosoft.com","sneha.mali@quickshift.in","ramakrishna@akshayaitsolutions.com","harshita@key2source.com","shivani.rathore@acme-services.in","gauravshukla@techmatrix.pro","vkamtam@radgov.com","Rosy@sunixasolutions.com","sandeep@holistic-partners.com","nazeera@vysystems.com","ramya.adapa@sureminds.co.in","recruiter2@elitehireservice.com","hr@asjtransgloballlp.com","abhinav@qitresourcing.com","jobs@allimetech.com","hr@techior.com","abhinav.p@neotechusa.com","mohammed.nazeer@alansari.ae","navya@r4binfotech.com","tejasai.a@i-q.com","sanket.pawar@fulcrumdigital.com","honoka.t@manpower.com.my","damini.dhiman@infostride.com","sreenath@fusiongts.com","varun@tekdallas.com","Sravanthi@mavensoft.com","annu.kumari@talentanytime.com","rimsha_farooq@cscec.ae","aryan@pvkc.com","prasad.dunung@magna.com","laksh.barla@sysvine.com","ramu.karra@lancesoft.com","sonia@amtexenterprises.com","hr@symmetrictechnology.in","vurmila@hsktechnologies.net","supriyar@doodleblue.com","rashmi@infotreeservice.com","career@nexoneresource.com","a.vashistha@pinakitech.com","bhuvaneshwarie@krishpar.com","vidyasagar.chintala@centstone.com","meghnas@mindlance.com","rajat.h@dimensioncg.com","ahmad.ridho@nityo.com","Vijin.a@bourntec.com","gerardo.barra@coforge.com","hr@metalmindhr.in","mudit.dixit@nivabupa.com","smitha.cs@qualitrix.com","albert@we-carestaffing.com","namitha.m@manvision.net","Jahnavi.m@sritechsolutions.com","binitha@ardonlabs.com","hr@projostech.com","recruiter2@infolexus.com","nandakishan@kgisl.com","tahir.shah@skydigitallabs.com","hello@yantramedia.co.in","dhruvgupta@albireorecruiters.in","priyanka.im@intellect-minds.com","naresh@gandivainsights.com","tanu.kumari@varite.com","ittis@sysmind.com","hr@xatgservices.com","a.tiwari@apolisrises.com","mdelavega@izertis.com","hr@cbnitservices.com","Kurukuri.Raju@jkdtl.com","kshubham@futransolutions.com","pavankrishna@sunraisetechnologies.com","Srinivas.m@eraytec.com","vinutha.chandrappa@optimizercm.com","rohith.aouta@speridian.com","careers@americanitsystems.com","sindhu.m@fastalenttech.com","hr@icubes.org","zeenat.usmani@irissoftware.com","hr@moldstud.com","mohit.kumar@conov8.com","vishal@saasitservices.com","info@raneenmep.ae","prudhvi@coolsofttech.com","daisy@s-linx.com","piyusha.r@apideltech.com","talent@logfixscm.com","careers@logfixscm.com","hr@incarnatehrsolutions.in","cvs@intasinfotech.com","hr@coswavesolutions.net","sindhu.b@eniacsys.com","radhika.yadav@quantumcommit.com","sam@tecintuition.com","hasini.rageesh@vitimcloud.com","tanya.s@acme-services.in","aman.alam@adventatech.com","prasad@kanorsystems.com","neha@arkhyatech.com","churchill@cloudious.com","hr1@futuretalentadvisory.com","nikisha.andrades@antal.com","Diwakar@flexontechnologies.com","andrew@eninsystems.com","ramona.mateo@nityo.com","hello@trishivax.info","anjali.kashyap@apptadinc.com","magadi.moeletsi@dariel.co.za","mai.huynh@iconic-intl.com","sangita@harjai.com","Rohan.s@theveritashealthcare.net","harshitab@softpathtech.com","monika.das@loan112.com","sksiddaramu@v2soft.com","arya@phoenixinfosolution.com","mutiara.sakinah@pfcs.co.id","kalpana.annu@innorev.com","keerthi@tekdallas.com","surabhi.rathore@siddhucs.in","shyam.p@amazesystemsinc.com","brajesh@delbangindia.com","meghna@gracehire.com","sreehari.k@fastalenttech.com","shireesha.thota@liveconnections.in","hr@shuratech.com","gkarthik@softpathtech.com","sahil.khan@diverselynx.in","neha.gade@orangebitsindia.com","contact@talent-flow.io","anchal.s@dbi360.com","contact@smileconsultants.in","info@nexurahumancapital.com","shivamj@archerta.com","devikamina@hclglobal.com","ravie.pasaribu@indocyber.co.id","giridhar.g@tekwissen.in","kausar.rangari@ushtate.co.in","RohiniL@vbeyond.com","srinivasp@virtuoustech.com","mounika@hsktechnologies.net","aishwarya.vnair@ust.com","cv@linrco.com","lakshmiprasanna@people-prime.com","Malini.A@collarjobskart.com","Likithsai@rapinnotech.com","kamran.azad@apptadinc.com","Nikita.Solunke@ascendion.com","info@jayshaktimetals.com","Bhavani@parvu.ai","achaturvedi@prismagicinc.com","anjali.b@adaminfotech.com","raianne.olivares@ascendion.com","kupadhyay@vyzeinc.com","Aishwarya_Mankame@asus.com","alfiana.rindha@amartek.id","deblina.sen@in.ey.com","domprakash@asofttek.com","yamini.mudigeti@cgi.com","komal.munir@arpatech.com","r.himavanth@costaffglobal.in","ravinder.k@sritechsolutions.com","rec14@trustminds.com","careers@infinity-constructions.com","rick@thetruesolutions.com","sravanthi@infinity-arc.com","mala@qualitatva.com","sureshg@dimensioncg.com","Aishwaryag@sysmind.com"]
const emailSubject = "Application for Software Test Engineer (QA) - Mahesh Dhopre";
const emailBody = `Dear Hiring Team,

I am excited to apply for the Software Test Engineer (QA) position at your company.

As a dedicated QA automation professional with 4+ years of experience, I have successfully delivered high-quality testing solutions for leading companies in healthcare, insurance, banking, and e-commerce sectors. My expertise includes:

• Designing and implementing comprehensive automation test frameworks
• Ensuring superior product quality and reliability
• Collaborating with cross-functional teams to meet project deadlines

I am passionate about delivering excellence and am confident that my technical skills and experience make me an ideal fit for your team. I have attached my resume and would be delighted to discuss this opportunity with you.

Looking forward to hearing from you!

Best Regards,
Mahesh Dhopre
Mobile: +91-7066850747`;


/*
const emailSubject= "Application for .NET Developer Role – 3+ Years Experience";
const emailBody = `Dear Hiring Team,I’m applying for the.NET Developer position in your organization. I have 3+ years of experience working on C#, http://ASP.NET Core, MVC, Web API, and SQL Server.

Key highlights:
- Built and maintained RESTful APIs and web applications
- Worked on microservices architecture and cloud deployment on Azure
- Database optimization and performance tuning
- Experience with Git, Agile, and CI/CD pipelines

I am comfortable handling both backend and API development work. Please find my resume attached for your review.

Looking forward to discussing how I can contribute to your team.

Thanks & Regards,  
Pratiksha Powar
9763883889`;
*/


// Path to your resume in Downloads folder
const RESUME_PATH = "C:\\Users\\Yogesh\\Downloads\\MaheshDhopreSoftware_Automation_Engineer.pdf";

//const RESUME_PATH = "C:\\Users\\Yogesh\\Downloads\\Pratiksha_Powar_.NETDeveloper.pdf";


// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: APP_PASSWORD, // Use App Password (NOT regular password)
  },
});

// Function to send email
async function sendEmailToHR(email, index, total) {
  try {
    console.log(`[${index}/${total}] Sending email to ${email}...`);

    const mailOptions = {
      from: `Mahesh <${EMAIL}>`,
      to: email,
      subject: emailSubject,
      text: emailBody,
      attachments: [
        {
          filename: "MaheshDhopreSoftware_Automation_Engineer.pdf",
          path: RESUME_PATH,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log(`✓ Email sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`Failed to send email to ${email}: ${error.message}`);
    return false;
  }
}

// Main function
async function sendAllEmails() {
  console.log(`\n📧 Starting email sending process for ${hrEmails.length} recipients...\n`);
  console.log("Recipient list:");
  hrEmails.forEach((email, index) => {
    console.log(`${index + 1}. ${email}`);
  });
  console.log("");

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < hrEmails.length; i++) {
    const success = await sendEmailToHR(hrEmails[i], i + 1, hrEmails.length);
    if (success) successCount++;
    else failCount++;

    // Add 2 second delay between emails
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log("\n📊 Process completed!");
  console.log(`✓ Sent: ${successCount}/${hrEmails.length}`);
  if (failCount > 0) console.log(`✗ Failed: ${failCount}`);
}

sendAllEmails().catch(console.error);
