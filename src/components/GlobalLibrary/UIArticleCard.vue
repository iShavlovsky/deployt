<template>
    <a class="small_card_lb">
        <div class="small-card-img-w">            
           <img class="small-card-img" src="@/assets/img/project_cover1.jpg"
            alt="decorative">
        </div>
        <div>
            <div></div>
            <div class="article-card-info-w">
                <h3 class="uor-work_title">How to kick the developer in the ass to keep him happy</h3>
                <p class="our-work_description">We are unrealistically good at what we do 
                    and we are on fire with digital products. Let's develop something together! </p>
            </div>
        </div>
    </a>
</template>

<script>

</script>

<style scoped lang="scss">

.small_card_lb{
    color: $primary-white;
}
.small-card-img-w {
    width: 100%;
    height: em(220);
    overflow: hidden;
}

.uor-work_title {
        @include h3-small();
}
.article-card-info-w {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: em(16);
    margin-top: em(16);
}

.our-work_description {
        @include txt-body();
}
.small-card-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
</style>