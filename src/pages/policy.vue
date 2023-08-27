<template>
   <section class="pt-28 pb-10 lg:pt-36">
      <div class="container">
         <block-v-breadcrumbs class="mb-8" :roter-link="roterData" />
         <h1 class="relative flex items-center gap-4 mb-5 text-[50px] text-primary font-Beret leading-none">
            <ui-btn-back />
            Privatuma politika
         </h1>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Šī privātuma politika informē par privātuma praksi un personas datu apstrādes principiem saistībā ar Arsenijs Fabrica mājas lapu un
            pakalpojumiem. Lai sazinātos saistībā ar datu apstrādes jautājumiem, lūdzu rakstiet e-pastu uz arsenijsfabrica@inbox.lv
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Kādu informāciju mēs iegūstam?</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Mēs iegūstam tādus personas datus, ko jūs mums brīvprātīgi sniedzat ar e-pasta starpniecību, aizpildot tīmeklī bāzētās anketas un citā
            tiešā saziņā ar jums.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Iesniedzot pasūtījumu, jums jānorāda vārds, uzvārds, kontaktinformācija, piegādes adrese, [papildus datu uzskatiījums] un cita informācija
            kuru jūs vēlaties sniegt.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Kā mēs izmantojam iegūtos personas datus?</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Mēs varam izmantot iegūtos personas datus, lai</p>
         <ul class="list-disc ml-5 mb-3">
            <li class="font-Giga text-tertiary opacity-70 mb-2">sniegtu jums jūsu pieprasītos pakalpojumus un informāciju;</li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">apstrādātu jūsu pasūtījumus un noformētu nepieciešamos dokumentus;</li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">sniegtu jums efektīvu klientu atbalstu;</li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">palīdzētu novērst apdraudējumu vai krāpnieciskas darbības;</li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               nosūtītu jums informatīvus ziņojumus, ja esat nepārprotami piekrituši tādus saņemt'
            </li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">ievērotu normatīvo aktu prasības.</li>
         </ul>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Mēs varam nodot jūsu informāciju trešajām personām, lai ievērotu normatīvo aktu prasības, sadarbotos ar uzraudzības iestādēm, palīdzētu
            novērstu noziedzīgas darbības un aizsargātu mūsu, jūsu un citu personu likumīgās tiesības.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Kā mēs aizsargājam personas datus?</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Jūsu personas datu aizsardzībai mēs izmantojam dažādus tehniskus un organizatoriskus drošības pasākumus. Jūsu personas dati ir pieejami
            ierobežotam cilvēku skaitam, tikai pilnvarotām personām.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Cik ilgi mēs glabājam personas datus?</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Mēs glabājam jūsu personas datus tik ilgi, cik ilgi tie ir mums nepieciešami atbilstoši to ieguves mērķim un kā to pieļauj vai nosaka
            normatīvo aktu prasības.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Kā mēs izmantojam sīkdatnes?</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Sīkdatnes ir nelielas teksta datnes, ko jūsu apmeklētās mājas lapas saglabā jūsu datorā. Tās tiek izmantotas, lai nodrošinātu mājas lapas
            darbību, kā arī lai sniegtu informāciju vietnes īpašniekiem.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Šī mājas lapa var iestatīt sekojošas sīkdatnes:</p>
         <ul class="list-disc ml-5 mb-3">
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b>Funkcionālās sīkdatnes.</b> Šīs sīkdatnes ir nepieciešamas, lai jūs spētu pārvietoties mājas lapā un lietot tās funkcijas. Bez šim
               sīkdatnēm mēs nevaram nodrošināt jūsu pieprasītos pakalpojumus, piemēram, preču groza funkcionalitāti.
            </li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b>Google Analytics sīkdatnes.</b> Šīs sīkdatnes lieto, lai iegūtu mūsu mājas lapas apmeklējuma statistiku. Mēs lietojam šo
               informāciju, lai uzlabotu vietnes darbību un reklāmas pasākumus.
            </li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b>Mērķētas reklāmas rīku sīkdatnes. </b> Šīs sīkdatnes lieto, lai paaugstinātu reklāmas efektivitāti un rādītu reklāmas, kas,
               visticamāk, jūs interesēs visvairāk.
            </li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b>Trešās puses pakalpojumu sniedzēja sīkdatnes.</b> Sīkdatnes var iestatīt šādi šajā mājas lapā lietotie trešo pušu pakalpojumi:
               Facebook poga "Patīk", YouTube video, [citi pakalpojumi]. Dažas no šīm sīkdatnēm var tikt izmantotas, lai sekotu līdzi jūsu darbībām
               citās mājas lapās, un mēs tās nevaram kontrolēt, jo šīs sīkdatnes nav iestatījusi mūsu mājas lapa.
            </li>
         </ul>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Kā atteikties no sīkdatnēm?</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Lai atteiktos no sīkdatņu saņemšanas, jūs varat izmantojot privātās pārlūkošanas režīmu, kuru nodrošina lielākā daļa pārlūkprogrammu
            (privāts logs, inkognito logs vai InPrivate logs). Jebkādas sīkdatnes, kas tiek izveidotas, darbojoties privātās pārlūkošanas režīmā, tiek
            dzēstas, tiklīdz jūs aizverat visus pārlūka logus.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Lai atteiktos no mērķētas reklāmas rādīšanai nepieciešamās informācijas iegūšanas un lietošanas, jūs varat izmantot bezmaksas rīku Your
            Online Choices vai YourAdChoices.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Jūsu tiesības saistībā ar jūsu personas datiem</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Ja jūs esat datu subjekts saskaņā ar ES VDAR (piemēram, jūs esat ES pilsonis un sniedzat mums savus personas datus), jums ir turpmāk
            minētās tiesības saistībā ar saviem personas datiem:
         </p>
         <ul class="list-disc ml-5 mb-3">
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b> Tiesības piekļūt informācijai.</b>
               Jums ir tiesības saņemt informāciju par to, kāpēc un kā tiek apstrādāti jūsu personas dati. Jums ir tiesības bez maksas saņemt mūsu
               rīcībā esošo jūsu personas datu kopiju plaši izmantotā elektroniskā formātā.
            </li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b> Tiesības labot. </b>
               Jums ir tiesības panākt neprecīzu vai nepilnīgu personas datu labošanu vai papildināšanu bez nepamatotas kavēšanās.
            </li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b>Tiesības „tikt aizmirstam".</b>
               Jums ir tiesības atsaukt savu piekrišanu personas datu apstrādei un panākt savu personas datu dzēšanu bez nepamatotas kavēšanās,
               tiklīdz dati vairs nav nepieciešami, lai sniegtu jūsu pieprasītos pakalpojumus un ievērotu normatīvo aktu prasības.
            </li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b> Tiesības ierobežot apstrādi. </b>
               Jums ir tiesības panākt savu personas datu apstrādes ierobežošanu, ja jūs iebilstat pret to un mums nav leģitīmu pamatu turpināt
               apstrādi, ja jūs apstrīdat datu precizitāti, ja apstrāde ir pretlikumīga vai ja jūs pieprasāt celt, īstenot vai aizstāvēt likumīgas
               prasības.
            </li>
            <li class="font-Giga text-tertiary opacity-70 mb-2">
               <b> Tiesības iebilst. </b>
               Jums ir tiesības jebkurā brīdī iebilst pret datu apstrādi, ja vien tas nav nepieciešams sabiedrības interesēs veicamam uzdevumam vai
               apstrādei nepastāv neapstrīdami likumīgs pamats.
            </li>
         </ul>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Citas tiesības saskaņā ar VDAR 6. pantu:</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">1. apakšpunkts</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Apstrāde ir likumīga tikai tādā apmērā un tikai tad, ja ir piemērojams vismaz viens no turpmāk minētajiem pamatojumiem:
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            a) datu subjekts ir devis piekrišanu savu personas datu apstrādei vienam vai vairākiem konkrētiem nolūkiem;
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            b) apstrāde ir vajadzīga līguma, kura līgumslēdzēja puse ir datu subjekts, izpildei vai pasākumu veikšanai pēc datu subjekta pieprasījuma
            pirms līguma noslēgšanas;
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">c) apstrāde ir vajadzīga, lai izpildītu uz pārzini attiecināmu juridisku pienākumu;</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            d) apstrāde ir vajadzīga, lai aizsargātu datu subjekta vai citas fiziskas personas vitālas intereses;
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            e) apstrāde ir vajadzīga, lai izpildītu uzdevumu, ko veic sabiedrības interesēs vai īstenojot pārzinim likumīgi piešķirtās oficiālās
            pilnvaras;
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">2. apakšpunkts</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Šā panta 1. punkta c) un e) apakšpunktā minēto apstrādes pamatu nosaka ar: a) Savienības tiesību aktiem; vai b) dalībvalsts tiesību
            aktiem, kas piemērojami pārzinim. Apstrādes nolūku nosaka minētajā juridiskajā pamatā vai – attiecībā uz 1. punkta e) apakšpunktā minēto
            apstrādi – tas ir vajadzīgs, lai izpildītu uzdevumu, ko veic sabiedrības interesēs vai īstenojot pārzinim likumīgi piešķirtās oficiālās
            pilnvaras. Minētajā juridiskajā pamatā var būt ietverti konkrēti noteikumi, lai pielāgotu šīs regulas noteikumu piemērošanu, cita starpā
            vispārēji nosacījumi, kas reglamentē pārziņa īstenotu apstrādes likumību; apstrādājamo datu veidi; attiecīgie datu subjekti; vienības,
            kurām personas dati var tikt izpausti, un mērķi, kādiem tie var tikt izpausti; apstrādes nolūka ierobežojumi; glabāšanas termiņi; un
            apstrādes darbības un apstrādes procedūras, tostarp pasākumi, lai nodrošinātu likumīgu un godprātīgu apstrādi, piemēram, citās konkrētās
            datu apstrādes situācijās, kas paredzētas IX nodaļā. Savienības vai dalībvalsts tiesību akti atbilst sabiedrības interešu mērķim un ir
            samērīgi ar izvirzīto leģitīmo mērķi.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">Vairāk informācijas skatiet, apmeklējot ES datu aizsardzībai veltīto mājas lapu.</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">IZMAIŅAS PRIVĀTUMA POLITIKĀ</p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Mums ir tiesības jebkurā laikā veikt izmaiņas Privātuma Politikā, publicējot tās Mājaslapā. Jebkura Privātuma Politikas versija, kas
            publicēta Mājaslapā, aizstāj visas iepriekšējās Privātuma Politikas versijas un stājas spēkā nekavējoties pēc to publicēšanas.
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            KONTAKTINFORMĀCIJA Jums ir tiesības vērsties datu aizsardzības uzraudzības iestādē – Datu Valsts Inspekcija, Blaumaņa iela 11/13-15, Rīga,
            LV-1011, Tālr.: 67223131, E-pasts: info@dvi.gov.lv
         </p>
         <p class="font-Giga text-tertiary opacity-70 mb-3">
            Ja Jums rodas kādi jautājumi, komentāri vai pieprasījumi saistībā ar Privātuma Politiku, sazinieties ar mums, rakstot uz
            arsenijsfabrica@inbox.lv vai: <br />
            ARSENIJS FABRICA SIA <br />
            REG.NUMBER. 50203415881 <br />
            SWEDBANKA LV39HABA0551053035908 <br />
            PUDIĶA IELA 33 - 1, RĪGA, LV-1006
         </p>
      </div>
   </section>
</template>

<script>
export default {
   setup() {
      useHead({
         title: "Arsenijs Fabric | Privacy policy",
      });
   },
   data() {
      return {
         roterData: [
            {
               id: 1,
               name: "Home",
               to: "/",
               last: false,
            },
            {
               id: 2,
               name: "Policy",
               to: "/policy",
               last: true,
            },
         ],
      };
   },
};
</script>
