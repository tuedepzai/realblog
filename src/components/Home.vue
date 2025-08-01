<script setup>
import { onUpdated, ref } from 'vue'
let SearchInput = ref('')

onUpdated(() => {
    console.log(`user searched: ${SearchInput.value}`)
})

</script>
<template>
<div class="navi">
    トゥエー: One Stop Page
</div>
<div class="blog">
    <h2 class="quick-intro">Giới thiệu</h2>
    <p style="font-size: italic;" class="text_">
        "Mình không phải người giỏi, mà mình luôn cố gắng. Vì vậy những bài viết trong đây mang tính sưu tầm từ những cuốn sách khác nhau, mỗi bài sẽ nói về những chủ đề khác nhau tùy dựa theo hứng thú của mình"
    </p>

    <div class="intro">
        <img src="./Assets/avt.jpg" class="myavt"></img>
        <p class="text_">
            [VN] Mình là Tuệ (トゥエー) là một tân sinh viên K70 của đại học Bách Khoa Hà Nội. Mình có một niềm đam mê với lập trình, robot, hay anime, và đã có nhiều năm kinh nghiệm trong lĩnh vực này
            <br></br>
            [EN] I'm Tuệ (トゥエー), a freshman of the 70th cohort at Hanoi University of Science and Technology. I have a passion for programming, robotics, and anime, and I’ve had several years of experience in these fields.
        </p>
    </div>
     <h2 class="quick-intro">Liên lạc</h2>
     <p class="text_">
      Mình không hay dùng các nền tảng khác lắm, tùy vậy sở thích của mình là lướt phở bò hẹ hẹ hẹ
      <a href="https://www.facebook.com/tuedepzai.6912">[Phở bò]</a> và mình hay lưu những cái project của mình trên <a href="https://github.com/tuedepzai?tab=repositories">[Github]</a> <br></br>
    </p>
    <h2 class="quick-intro">Các bài viết</h2> <br></br>
    <input v-model="SearchInput" placeholder="Tra cứu theo tên"></input>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap');

.hina-mincho-regular {
    font-family: "Hina Mincho", serif;
    font-weight: 400;
    font-style: normal;
}

.navi {
    width: 100%;
    height: 3vh;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4vh;
    padding-bottom: 4vh;

    font-size: clamp(1rem, 4vw, 2rem);
}

.blog {
    padding-top: 2vh;
    width: 100%;
    height: 100vh;
    padding-left: clamp(32px, calc(32vw - 72px), 680px);
    padding-right: clamp(32px, calc(32vw - 72px) , 680px);
    box-sizing: border-box;
}

.quick-intro {
    display: inline-block;
    font-size: clamp(1.4rem, 4vw, 2.4rem);
    width: auto;
}

.text_ {
    font-size: clamp(.5rem, 3vw, 1.5rem);
}

* {
    font-family: "Hina Mincho", serif;
}
.intro {
    display: grid;
    grid-template-columns: 50% 50%;
    width: auto;
}
</style>
