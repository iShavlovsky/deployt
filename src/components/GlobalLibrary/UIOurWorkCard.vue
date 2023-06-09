<template>
    <a class="big_card_lb">
        <div class="our-work-image-w">            
           <img class="our-work-image" src="@/assets/img/project_cover1.jpg"
            alt="decorative">
        </div>
        <div class="col-3-grid">
            <div></div>
            <div class="our-work-card-info-w">
                <h3 class="uor-work_title">a sstn idhsk attlhn sttihc wat</h3>
                <p class="our-work_description">We are unrealistically good at what we do and we are on fire with digital products. Let's develop something together! 
                    We are unrealistically good at what we do and we are on fire with digital products. Let's develop something together! </p>
            </div>
        </div>
    </a>
</template>

<script>

</script>

<style scoped lang="scss">

.big_card_lb{
    color: $primary-white;
}
.our-work-image-w {
    width: 100%;
    height: em(410);
    overflow: hidden;
}

.col-3-grid {    
    margin-top: em(32);
    display: grid;
    grid-column-gap: em(89);
    grid-row-gap: em(96);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
}
.uor-work_title {
        @include h3-small();
}
.our-work-card-info-w {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: em(16);
    grid-column-start: span 2;
    grid-column-end: span 3;
}

.our-work_description {
        @include txt-body();
}
.our-work-image {
    object-fit: cover;
    height: 140%;
}
</style>