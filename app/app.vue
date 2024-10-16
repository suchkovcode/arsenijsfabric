<template>
   <Html lang="en-US">
      <Head>
         <Title>ARSENIJS FABRICA</Title>
         <Meta charset="utf-8" />
         <Meta name="viewport" content="width=device-width, user-scalable=no" />
         <Meta http-equiv="x-ua-compatible" content="IE=edge" />
         <Meta name="mobile-web-app-capable" content="yes" />
         <Meta name="apple-mobile-web-app-title" content="ARSENIJS" />
         <Meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
         <Meta name="robots" content="noindex, nofollow" />
         <Meta name="author" content="ARSENIJS LLC" />
         <Meta property="og:site_name" content="ARSENIJS" />
         <Meta property="og:locale" content="en_US" />
         <Meta name="twitter:domain" content="ARSENIJS" />
         <Meta name="twitter:card" content="summary_large_image" />
         <Link rel="icon" type="image/png" href="/static/favicon-48x48.png" sizes="48x48" />
         <Link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
         <Link rel="shortcut icon" href="/static/favicon.ico" />
         <Link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
         <Link rel="manifest" href="/static/site.webmanifest" />
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
