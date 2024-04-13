<template>
   <Html lang="en-EN">
      <Head>
         <Meta charset="utf-8" />
         <Meta name="viewport" content="width=device-width, user-scalable=no" />
         <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <Meta name="apple-mobile-web-app-title" content="Amorfy" />
         <Meta name="apple-mobile-web-app-capable" content="yes" />
         <Meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
         <Meta name="robots" content="noindex, nofollow" />
         <Meta name="author" content="Amorfy LLC" />
         <Meta property="og:site_name" content="amorfy.net" />
         <Meta property="og:locale" content="ru_RU" />
         <Meta property="fb:app_id" content="" />
         <Meta name="twitter:domain" content="amorfy.net" />
         <Meta name="twitter:card" content="summary_large_image" />
         <Meta name="msapplication-config" content="/static/browserconfig.xml" />

         <Link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
         <Link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
         <Link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
         <Link rel="icon" type="image/png" sizes="48x48" href="/static/favicon-48x48.png" />
         <Link rel="icon" type="image/png" sizes="228x228" href="/static/coast-228x228.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="60x60" href="/static/apple-touch-icon-60x60.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="167x167" href="/static/apple-touch-icon-167x167.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
         <Link rel="apple-touch-icon" type="image/png" sizes="1024x1024" href="/static/apple-touch-icon-1024x1024.png" />
      </Head>
      <Body class="h-full min-h-screen">
         <app-header />
         <main class="overflow-hidden">
            <NuxtPage />
         </main>
         <app-footer />
      </Body>
   </Html>
</template>
