const views = ["home","courses","grammar","vocabulary","slang","skills","ielts","toefl","toeic","gre"];
const labels = {slang:"Slang & expressions",home:"Overview",courses:"Learning paths",grammar:"Grammar",vocabulary:"Vocabulary",skills:"Skills practice",ielts:"IELTS",toefl:"TOEFL",toeic:"TOEIC",gre:"GRE Verbal"};
function showView(name){if(!views.includes(name))name="home";document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+name));document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===name));document.getElementById("crumb").textContent=labels[name];document.getElementById("sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
document.getElementById("mobileMenu").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));

const words=[
 ["Abundant","adjective","Melimpah; tersedia dalam jumlah besar.","The region has abundant natural resources."],
 ["Reluctant","adjective","Enggan atau tidak bersedia melakukan sesuatu.","She was reluctant to speak in front of the class."],
 ["Significant","adjective","Penting atau cukup besar pengaruhnya.","There has been a significant improvement."],
 ["Maintain","verb","Mempertahankan atau menjaga agar tetap dalam kondisi tertentu.","It's important to maintain a healthy routine."],
 ["Convey","verb","Menyampaikan ide, perasaan, atau informasi.","The chart conveys a clear message."],
 ["Inevitable","adjective","Tidak dapat dihindari; pasti terjadi.","Some changes are inevitable."],
 ["Accurate","adjective","Tepat dan bebas dari kesalahan.","Please provide accurate information."],
 ["Enhance","verb","Meningkatkan kualitas atau nilai sesuatu.","Reading can enhance your vocabulary."],
 ["Nevertheless","adverb","Meskipun demikian; digunakan untuk menunjukkan kontras.","The task was difficult; nevertheless, he finished it."],
 ["Subtle","adjective","Tidak mencolok atau sulit dikenali secara langsung.","There is a subtle difference between the two words."]
];
document.getElementById("vocabGrid").innerHTML=words.map(w=>`<article class="vocab-card"><h3>${w[0]}</h3><span class="pos">${w[1]}</span><p>${w[2]}</p><blockquote>${w[3]}</blockquote></article>`).join("");

const questions=[
 {q:"She ___ English every day.",a:["study","studies","studying","studied"],c:1,e:"Use studies with he, she, and it in the Present Simple. The subject is “she.”"},
 {q:"I ___ to the office yesterday.",a:["go","goes","went","gone"],c:2,e:"“Yesterday” indicates the past. The past form of go is went."},
 {q:"Which word is closest in meaning to “reluctant”?",a:["Excited","Unwilling","Certain","Careless"],c:1,e:"Reluctant means unwilling or hesitant to do something."},
 {q:"If I had more time, I ___ another language.",a:["learn","will learn","would learn","learned"],c:2,e:"This is the second conditional: If + past simple, would + base verb."},
 {q:"The report was ___ by the research team.",a:["prepare","prepared","preparing","prepares"],c:1,e:"This is the passive voice: be + past participle. “Was prepared” is correct."}
];
let qIndex=0,score=0,answered=false;
function renderQuestion(){const q=questions[qIndex];answered=false;document.getElementById("quizCount").textContent=`QUESTION ${qIndex+1} / ${questions.length}`;document.getElementById("quizProgress").style.width=((qIndex+1)/questions.length*100)+"%";document.getElementById("questionText").textContent=q.q;document.getElementById("answerList").innerHTML=q.a.map((a,i)=>`<button class="answer-option" data-answer="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join("");document.getElementById("feedback").hidden=true;document.getElementById("nextQuestion").disabled=true;document.getElementById("nextQuestion").textContent=qIndex===questions.length-1?"See result →":"Next question →";document.getElementById("scoreText").textContent="Your score: "+score;document.querySelectorAll(".answer-option").forEach(b=>b.addEventListener("click",()=>chooseAnswer(Number(b.dataset.answer))));}
function chooseAnswer(i){if(answered)return;answered=true;const q=questions[qIndex],correct=i===q.c;if(correct)score++;document.querySelectorAll(".answer-option").forEach((b,n)=>{b.disabled=true;if(n===q.c)b.classList.add("correct");else if(n===i)b.classList.add("wrong")});const f=document.getElementById("feedback");f.hidden=false;f.textContent=(correct?"Correct! ":"Not quite. ")+q.e;document.getElementById("nextQuestion").disabled=false;document.getElementById("scoreText").textContent="Your score: "+score;}
document.getElementById("nextQuestion").addEventListener("click",()=>{if(qIndex<questions.length-1){qIndex++;renderQuestion()}else{document.getElementById("questionText").textContent=`You scored ${score} out of ${questions.length}.`;document.getElementById("answerList").innerHTML="<p class='translation-note'>Review the explanations and try again to strengthen your understanding.</p>";document.getElementById("feedback").hidden=true;document.getElementById("quizCount").textContent="QUIZ COMPLETE";document.getElementById("nextQuestion").textContent="Try again ↻";document.getElementById("nextQuestion").disabled=false;document.getElementById("nextQuestion").onclick=()=>{qIndex=0;score=0;renderQuestion()};}});
renderQuestion();


const slang=[
 ["Lowkey","adverb / slang","Diam-diam, agak, atau sebenarnya (tergantung konteks).","I'm lowkey excited about the trip.","Informal"],
 ["Highkey","adverb / slang","Secara terang-terangan atau sangat; kebalikan informal dari lowkey.","I'm highkey proud of you.","Informal"],
 ["No cap","expression","Serius; bukan bohong atau bercanda.","That was the best concert, no cap.","Very informal"],
 ["Bet","expression","Oke, setuju, siap, atau tantangan diterima.","“Meet at seven?” — “Bet.”","Informal"],
 ["I'm down","expression","Aku mau / aku ikut.","I'm down for watching a movie tonight.","Casual"],
 ["Vibe","noun / slang","Suasana, kesan, atau energi yang terasa dari seseorang/tempat.","This café has a relaxing vibe.","Casual"],
 ["Catch up","phrasal verb","Mengobrol setelah lama tidak bertemu; mengejar ketertinggalan.","Let's catch up this weekend.","Neutral"],
 ["My bad","expression","Salahku; maaf, itu kesalahanku.","My bad, I sent the wrong file.","Casual"],
 ["It hits different","expression","Terasa berbeda atau lebih berkesan dari biasanya.","This song hits different at night.","Informal"],
 ["I'm finna…","slang","Aku akan / sebentar lagi mau melakukan sesuatu; umum dalam AAVE dan sebagian penggunaan informal AS.","I'm finna head out.","Very informal; regional"],
 ["That's wild","expression","Itu gila / mengejutkan / sulit dipercaya.","You met the singer backstage? That's wild.","Casual"],
 ["Legit","adjective / slang","Asli, valid, dapat dipercaya, atau benar-benar bagus.","That restaurant is legit.","Informal"]
];
document.getElementById("slangGrid").innerHTML=slang.map(w=>`<article class="vocab-card"><div class="slang-top"><span class="tag">${w[4]}</span></div><h3>${w[0]}</h3><span class="pos">${w[1]}</span><p>${w[2]}</p><blockquote>${w[3]}</blockquote></article>`).join("");

const securityModal=document.getElementById("securityModal");
document.getElementById("openSecurity").addEventListener("click",()=>securityModal.hidden=false);
document.getElementById("closeSecurity").addEventListener("click",()=>securityModal.hidden=true);
securityModal.addEventListener("click",e=>{if(e.target===securityModal)securityModal.hidden=true});
document.getElementById("cameraConsent").addEventListener("click",async()=>{
 const status=document.getElementById("securityStatus");
 try{
  const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:false});
  const video=document.getElementById("securityVideo");video.srcObject=stream;video.hidden=false;
  status.textContent="Camera preview is active on this device only. No photo is taken or uploaded. Close this panel to stop the preview.";
  securityModal.addEventListener("click",()=>{stream.getTracks().forEach(t=>t.stop());video.hidden=true;video.srcObject=null;},{once:true});
 }catch(err){status.textContent="Camera permission was not granted or the camera is unavailable.";}
});
document.getElementById("locationConsent").addEventListener("click",()=>{
 const status=document.getElementById("securityStatus");
 if(!navigator.geolocation){status.textContent="Geolocation is not supported by this browser.";return;}
 status.textContent="Waiting for browser location permission…";
 navigator.geolocation.getCurrentPosition(pos=>{
  status.textContent=`Location permission granted for this session. Coordinates are displayed only here: ${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}. Nothing is sent to Telegram in this preview.`;
 },()=>{status.textContent="Location permission was not granted or location is unavailable."},{enableHighAccuracy:false,timeout:10000});
});
