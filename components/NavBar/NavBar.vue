<script setup>
// const homeImage = new URL("../../assets/Image/UI/Logo.png", import.meta.url).href;
</script>

<template>
  <nav class="fixed top-0 z-10 w-full text-item">
    <div class="absolute z-10 w-full">
      <div class="w-8 image h-11 bg-Star-image right-10 top-10 4xl:scale-150"></div>
      <div class="w-8 image h-11 bg-Star-image left-32 top-8 4xl:scale-150 4xl:left-60 3xl:opacity-0"></div>
      <div class="w-8 image h-11 bg-Star-image right-154 top-28 4xl:scale-150"></div>
      <div class="w-8 rotate-45 image h-11 bg-Star-image left-80 top-32 4xl:scale-150 4xl:left-100"></div>
      <div class="h-32 image w-36 bg-Spaceship-image right-24 top-24 4xl:scale-150 4xl:right-44"></div>
      <div class="h-48 image w-48 bg-Cloud-image left-0 top-16 2xl:hidden 4xl:scale-150 4xl:origin-left"></div>
    </div>
    <NavBarSrcMenu _class="h-32">
      <template #logo>
        <NavBarSrcLogo href="/" img="assets/Image/UI/Logo.png" width="width:120px" />
      </template>
      <NavBarSrcMenuItem href="/">首頁</NavBarSrcMenuItem>

      <NavBarSrcMenuItem href="/Information">關於策展</NavBarSrcMenuItem>
      <NavBarSrcMenuList menuListOffset="-translate-x-3">
        <template #menuName>展覽介紹+</template>
        <NavBarSrcMenuListItem href="/Exhibitions/GoodNight">晚安屋<template #en>Goodnight Room</template></NavBarSrcMenuListItem>
        <NavBarSrcMenuListItem href="/Exhibitions/Dream">夢境房<template #en>Dreamland Room</template></NavBarSrcMenuListItem>
      </NavBarSrcMenuList>

      <NavBarSrcMenuList menuListOffset="-translate-x-4">
        <template #menuName>線上展覽+</template>
        <NavBarSrcMenuListItem href="/OnlineTour">策展人導覽<template #en>Online Curator Tour</template></NavBarSrcMenuListItem>
        <NavBarSrcMenuListItemLink href="/3DWeb/3Dindex.html" target="_blank">虛擬實境<template #en>Virtual Reality Tours</template></NavBarSrcMenuListItemLink>
        <NavBarSrcMenuListItemLink href="/「夢境漫遊：繪本藝術展」導覽教育手冊.pdf" target="_blank">導覽教育手冊<template #en>Brochure</template></NavBarSrcMenuListItemLink>
      </NavBarSrcMenuList>

      <NavBarSrcMenuList menuListOffset="-translate-x-7">
        <template #menuName>推廣活動+</template>
        <NavBarSrcMenuListItem href="/Activities/WorkShops">工作坊<template #en>Workshops</template></NavBarSrcMenuListItem>
        <NavBarSrcMenuListItem href="/Activities/Forums">分享會<template #en>Lectures</template></NavBarSrcMenuListItem>
        <NavBarSrcMenuListItem href="/Activities/Meetings/0">研習營<template #en>Workshop</template></NavBarSrcMenuListItem>
        <NavBarSrcMenuListItem href="/Activities/ChildrenArts">兒童美學活動<template #en>Child Activities Lessons</template></NavBarSrcMenuListItem>
      </NavBarSrcMenuList>

      <NavBarSrcMenuList menuListOffset="-translate-x-4">
        <template #menuName>宣導影片+</template>
        <NavBarSrcMenuListItem href="/Videos/PreVideos">前導宣傳片<template #en>Teaser Trailer</template></NavBarSrcMenuListItem>
        <NavBarSrcMenuListItem href="/Videos/RecordVideos">訪談紀錄片<template #en>Documentary</template></NavBarSrcMenuListItem>
        <NavBarSrcMenuListItem href="/Videos/Animations">繪本小動畫<template #en>Animated promo</template></NavBarSrcMenuListItem>
      </NavBarSrcMenuList>

      <NavBarSrcMenuItem href="/Reserve">預約導覽</NavBarSrcMenuItem>

      <NavBarSrcMenuList menuListOffset="-translate-x-4">
        <template #menuName>活動花絮+</template>
        <NavBarSrcMenuListItem href="/Albums/Activity">活動紀錄<template #en>Exhibition Records</template></NavBarSrcMenuListItem>
        <NavBarSrcMenuListItem href="/Albums/Exhibition">展覽花絮<template #en>Event Records</template></NavBarSrcMenuListItem>
      </NavBarSrcMenuList>

      <NavBarSrcMenuItemLink href="https://www.arte.gov.tw/" target="_blank">國立臺灣藝術教育館</NavBarSrcMenuItemLink>
      <NavBarSrcMenuItemLink href="https://www.facebook.com/%E5%A4%A2%E5%A2%83%E6%BC%AB%E9%81%8A%E7%B9%AA%E6%9C%AC%E8%97%9D%E8%A1%93%E5%B1%95-105928812151999" target="_blank" _class="bg-inherit"><ion-icon name="logo-facebook" /></NavBarSrcMenuItemLink>
    </NavBarSrcMenu>
    <div class="h-10 bg-nav-image mt-28"></div>
  </nav>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  color: rgb(255, 255, 255);
  font-size: 48px;
  transform: translate(0, -25%);
}

@layer component {
  .text-item {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer base {
  nav span {
  }
}

@layer components {
  .image {
    @apply absolute bg-no-repeat bg-w100%;
  }
}
</style>
