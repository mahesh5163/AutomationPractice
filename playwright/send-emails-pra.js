const nodemailer = require("nodemailer");

const EMAIL = "pratikshapowar1006@gmail.com";
const APP_PASSWORD = "iexx iylo busy ngfn"; // Get from Google Account

const hrEmails =["debjani.das@firstmeridianglobal.com","hrit@caltek.us","diwya.viswanathan@diligentglobal.com","jayesh.jogi@deltassi.com","swathi@sharpgts.com","jobs@techantagesystems.com","sagar.baidya@grouptobias.com","sivajyothi@msysinc.com","lnarayanan@compestsolutions.com","heba.zaki@elsoadaa.com","aaliyahkohanowicz.partner@zohomail.com","jeeja@aristonpartners.com.au","diya.asnani@fiftyfivetech.io","hr.recruitment@datagearbi.com","k.gayathri@liveconnections.in","globe.recruiter@globeent.in","sangeetha.s@achutha.com","hrd11@venpastaffing.com","remya@pace2precise.com","manasvini.chiluvuru@millionmindsinfo.com","anupam.singh@jobvritta.com","bhuvi@skywaves.pro","saumya.tiwari@infoservllc.com","meghana@bcgnj.com","mahaboobp@minisofttech.com","kartik.gaur@altezzasys.com","corp@cynosurejobs.com","alaka.das@mjcglobaltech.com","mansi.sharma@linkageit.com","elvira.y@avowstech.com","mansi.pareek@antal.com","neha.sharma@testingxperts.com","ibrahim@alliedihtiraf.com","varalakshmi@kallque.com","ankita.sinha@wiredsoft.org","hr@vedantinfotech.com","adam@sidramtech.com","shalvi.saxena@adactin.com","nadia.f@aowstech.com","r.deepika08@ehireo.com","prateek@strivex.com","jitendra.singh@dynatechconsultancy.com","shariff.a@fornaxtech.com","srikanth.d@cyberidentitysolutions.com","geetha@crimsonbeans.co.in","jyothi.dineshan@techinconsulting.in","aem@careerxperts.com","fahim.ahmed@nityo.com","pdeepika@neonservices.in","sbusby@living-free.org","divyanshi.sharma@finagg.in","jobs@neridio.com","sam@springhealthgrp.com","hr@ak-its.com","dheeraj.gupta@shivsys.com","raviteja.kusuma@quest-global.com","tejaswini@tekwings.com","suvojeet.m@lancesoft.in","dfareedha@resourcecornerit.com","gayathri.b@riscrm.com","harini.kanduru@citiustech.com","sales@rjitcs.com","ritu@medrectechnologies.com","namrita.rathore@truelancer.com","sruthi.borapati@moxieit.com","tag@aadhyarajtech.com","priyadharshiniperiyasamy@vysystems.com","priyanshee.c@ipolarityllc.com","recruitment@shashwathsolution.com","subi@talentone.in","hr@buddypowerintotech.com","anusha@kelsaconsult.com","ramesh.s@ipolarityllc.com","muskan.singh@shivsys.com","kavyanand@kanmalaitech.com","archana.b@ashudividend.com","career@seekhrsolutions.com","ganeshs@cloudsolv.in","rajkiran@burgeonits.com","shaheen@squarehiring.com","laxmi@vaakruthi.com","sharad@edgeglobal.net","sreekanth@burgeonits.net","sushma.jagtap@flairminds.com","zineb.jafour@tesselategroup.com","neha.chourasiya@ltm.com","updesh@tek-staffing.com","ganeshk@testvagrant.com","drishyar@chiselontechnologies.com","kailuni.lanah@customertimes.com","rakshitha.mujakari@lancesoft.in","info@bestcareers.co.in","john@livecjobs.com","rakesh@devenir.co.in","jammulap@adventglobal.com","nelaveni@augusitsolutions.com","puja@firstcareercentre.com","jishant.shah@antal.com","asra@rmvworkforce.com","aly@manilarecruitment.com","thembi@eqplus.co.za","hr@eatechpvtltd.com","jaya@astuteinc.us","m.hari@prophecytechs.com","rajeswari@sightspectrum.in","lalit.chaudhary@zenotis.com","hr@ntgegypt.com","rachael@sidramtech.com","careers@ei8.in","shivani.rathore@acme-services.in","hr@fegno.com","bushra.parveen@follextechnology.com","zainab@archelons.com","afshan.iqbal@conurets.com","recruiter2@elitehireservice.com","reshma.dhabarde@otsi.co.in","jobs@allimetech.com","ravinder.k@worknovasllc.com","mohammed.nazeer@alansari.ae","anuj.kumar@recruiter.nlbtech.com","shatmadhu.basha@apexon.com","sreenath@fusiongts.com","aishna@serendipityservices.in","varun@tekdallas.com","poorva.rathod@pratititech.com","kavyasruthi.n@stafi.in","ritik.sharma@corehuntinc.com","nishadk@cognitbotz.com","kavana@antreanet.com","jasbir.thiara@ampcustech.com","bvishnu@kommforcesolutions.com","hr1@tuespotsolutions.com","dsoumya@edurungroup.in","hr@fournesttalent.com","amit.k@worknovasllc.com","prabhnoork.ahluwalia@thewitslab.com","a.vashistha@pinakitech.com","pranuthi@techripetechnologies.com","jyoti.d@tekskills.in","thanushree.hansraj@concentrix.com","sandesh@amrapalisolutions.in","recruitment@kytechservices.com","amit.rai@diverselynx.in","nitish@spruceinfotech.com","vasu@rarefiedit.com","vijin.a@bourntec.com","smitha.cs@qualitrix.com","ralaa@ntgclarity.com","vivek.s@centraprise.com","lavanya@ipolarityllc.com","devika@kyaraconsulting.com","richards@consulguru.com","priyanka.im@intellect-minds.com","vishal.chauhan@vizoninc.com","tanu.kumari@varite.com","ajaykumar.singh@afry.com","mradul.khandelwal@infobeans.com","deekshitha.r@careerxperts.com","anastasya.g@avowstech.com","shreya.s@goodfindsolutions.com","sarvesh.raut@minivel.com","avninder@themesoft.com","suvitha.g@cortexconsultants.com","shruti.jaiswal@ampcustech.com","hr@aayatnexatech.com","jacob@staffingcomrade.com","keerthana@dprsolutionsinc.com","rawat.ashish@quantumworldit.com","rishabh@infoservllc.com","seema@intellicsglobal.com","vidyalakshmi.tedlapu@quest-global.com","purnashri.a@genixcyber.com","prem@skywavesgroup.com","saibaba@devappsit.com","recruiter@ribbitzllc.com","info@adeptgic.com","divinetalentacquisition@zohomail.com","rahul.singh@aristonconsult.com","rizwaana@aayatnexatech.com","harlyn.aclan@citypeoplesolutions.com.au","anurag.kirti@xerox.com","hr.india@redoq.com","reetika.m@fixitytech.com","sam@tecintuition.com","megha.basantani@samvadsocial.com","surya@sapphiresoftwaresolutions.com","mohd.amzad@talentportus.com","princi@akaasa.com","prakash@dprsolutionsinc.com","churchill@cloudious.com","siddhartha@bcgnj.com","anchal@alphasilicon.us","anil.kathula@techgird.com","saichakravarthi@astuteinc.us","sona@burgeonits.com","akshay@wiseskulls.com","hrushikesh@b2techservices.in","dhamani@datacube.ae","kshitij.gawali@enlinkit.com","pavankumar.d@rapinnotech.com","info@sphereindia.com","hr@redberyltech.com","hanzla@talentarabia.com","namitha@careerxperts.com","imtisola.mongro@spes.in","vishvaja.k@lancesoft.in","taniya@msoltechnology.com","nikitha.h@voltoconsulting.com","tskumar@eteaminc.com","sin5@sinclus.com","keerthi@tekdallas.com","kpatel@deqode.com","brajesh@delbangindia.com","sreehari.k@fastalenttech.com","pragya.rai@esolglobal.com","vijaya@strenv.com","abhishekgupta@enterprisesolutioninc.com","madhan.ravi@apexon.com","hr@acuteinfosoft.com","hr@mygupio.com","mounika.k@avanceservices.us","riya.bansal@xcelyst.com","nikhil.a@connectio.co.in","ravikiran.b@fastalenttech.com","swati.kumari@antino.com","kalyan.kumar@ewgcs.com","grace@talenttradervn.com","shaik.shafiya@firstmeridianglobal.com","saksham@gracehire.com","naresh.kante@ifinglobalgroup.com","bhavna@datazenconsulting.in","kishordebnath@mirai-com.jp","mydtd1@fpt.com","abhay@kaistechnologies.com","kamran.azad@apptadinc.com","growel4u@growelsoftech.com","hr@newavenueworkforce.com","shamu@ardonlabs.com","kupadhyay@vyzeinc.com","pkmohan@primusglobal.com","ankita.s@metrixit.com","aarushi.shukla@coforge.com","vaibhav.sharma@futureverseai.in","raunak@archelons.com","anubha.jain@jinendrainfotech.in","thirumalesh.a@people-prime.com","rec14@trustminds.com","kathy@uniteditinc.com","rick@thetruesolutions.com","vidushi@cloudpivottechnologies.com","praful.gorale@infosys.com","anshul@volumetree.com","yashika.agarwal@brihatisglobal.com","miya.j@talent-tech.id","jessie@trinityconsulting.asia","sana.fatima@odiware.com","pavithra.tr@enabledata.com","akshra.mahor@spes.in","aish.v@machconsultants.com","kirti@magureinc.com","sarvesh@skytek-global.com","shruti.kanthi@pratyin.com","garima.sharma@claritusconsulting.com","kashmira@caizin.com","chaya.devi@connections.in","esther@trinityconsulting.asia","p.gangadhara@costaffglobal.in","swathi.ss@aequor.com","vaidehisneha@wuele8.tech","vanshika.baranwal@dexian.com","vidhi@kyaraconsulting.com","hr@prosys.az","joinus@virtualmaze.co.in","pooja.sehrawat@zodiac-solutions.com","pradnya.bhalerao@programming.com","nikhil@archigossolutions.com","lalam.mishra@artech.com","ajay.sharma@vizoninc.com","shruti@symbiosisindia.net","paul@hyreu.com","gaurav.khanwalkar@infosys.com","sales@mewarinfotec.com","jayalaxmi.m@migstaffing.com","yash.raj@talentportus.com","bdc.hr@sandvik.com","sravanthi.gogula@quest-global.com","hr@clannstaffing.com","sukumar.n@rsatechgroup.com","kasturi.v@buzworks.com","ssudevan@assyst.net","debidutta@enfycon.com","santhoshkumar@covenantindia.net","talent@linkageit.com","fareedha@resourcecornerit.com","naveen@uniquehire.com","ganilakshmi@lovasit.com","nayna.gawali@dexian.com","g.punjabi@thesynapses.com","vasudha@silverlinktechnologies.com","sneha.ukey@infoorigin.com","ravi.prakash@lecansolutions.com","haribabu.krishnakumar@cgi.com","hardik.thapa@thewitslab.com","megha.goyal@devlabstechnology.com","swathi.p@anaghatechnosoft.com","bruntha.v@recpro.co.in","rmiranda@antal.com","priyab.zurunge@ltm.com","smeera.shetty@smollan.com","pbaghel@vyzeinc.com","eranda.desilva@tapartner.io","careers@firax.ai","nikhil.dusane@intellectdesign.com","abhinay@bcgnj.com","sweta.dungdung@cgi.com","naveen.malluri@mergencorp.com","anusha.b@nityainc.com","ilya.shaptala@ogd-solutions.com","aarti.rohila@xebia.com","nisha.thapa@theoptimum.net","pooja.kargupta@quesscorp.com","raksha@conveytechlabs.com","hr@talentone.co.in","md.tabish@synkriom.com","utkarsh.mehta@zoenixhq.com","sanjeevb@tccomputerservices.com","praveen@raad7.com","keerthana.shetty@firstmeridianglobal.com","placement@theiotacademy.com","bhargav.prajapati@deltassi.com","careers@emenoor.com","riya.dutta@emindsinfosystems.com","aravind.t@jaastechnologies.com","kirankumar.g@domniclewis.com","rakesh.gampula@firstsource.com","jyothish.r@xptsoftware.com","priyanka.jadhav@philodesigntech.com","nabbimutt@thoughtframeworks.com","lucky@mediit.io","lakshmankumar.kodupaka@sutherlandglobal.com","somya.maheshwari@peoplestrong.com","praveena@kbctechnologies.com","hnarasimhaiah@primusglobal.com","sanober@resourcifyconsultants.com","careers@unec.ae","krish@infoswift.io","simran@victoireus.com","anu@convextech.com","zari@talentifyy.com","connect@pgmservices.in","ajit@techvysolutions.com","sudheer@svatsinc.com","anshika.singh@programming.com","reema.a@unifyworld.com","talent@huru.com","sales@buddypowerintotech.com","nikita.s@praimero.com","khushi@firstcalli.com","depa.r@cortexconsultants.com","shailja@archerta.com","swamy@oxydata.my","moien.k@worknovasllc.com","gaurav_saini@hcltech.com","saikumar.r@twsol.com","grishma.g@machconsultants.com","tammisetty.anil@i2visions.com"]
const emailSubject= "Application for .NET Developer Role – 3+ Years Experience";
const emailBody = `Dear Hiring Team,

I am applying for the .NET Developer position in your organization. I have 3+ years of experience working on C#, ASP.NET Core, MVC, Web API, and SQL Server.

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



// Path to your resume in Downloads folder
//const RESUME_PATH = "C:\\Users\\Yogesh\\Downloads\\MaheshDhopreSoftware_Automation_Engineer.pdf";

const RESUME_PATH = "C:\\Users\\Yogesh\\Downloads\\Pratiksha_Powar_DotNET_Developer.pdf";


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
      from: `Pratiksha <${EMAIL}>`,
      to: email,
      subject: emailSubject,
      text: emailBody,
      attachments: [
        {
          filename: "Pratiksha_Powar_DotNET_Developer.pdf",
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
