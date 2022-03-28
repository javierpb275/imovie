<script setup lang="ts">
import ReviewCard from './ReviewCard.vue';

const reviews = [
    {
        id: 1,
        avatar: "url",
        username: "pepe",
        movieTitle: "the movie 1",
        text: "lorem ipsum blablabala blabla 1",
        points: 7,
        likes: 100,
        dislikes: 30,
        favorites: true
    },
    {
        id: 2,
        avatar: "url",
        username: "maria",
        movieTitle: "the movie 2",
        text: "lorem ipsum blablabala blabla 2",
        points: 5,
        likes: 120,
        dislikes: 70,
        favorites: false
    },
    {
        id: 3,
        avatar: "url",
        username: "paco",
        movieTitle: "the movie 3",
        text: "lorem ipsum blablabala blabla 3",
        points: 9,
        likes: 300,
        dislikes: 10,
        favorites: true
    },
]

</script>

<template>
    <div>
        <ReviewCard
            v-for="review in reviews"
            :key="review.id"
            :id="review.id"
            :avatar="review.avatar"
            :username="review.username"
            :movieTitle="review.movieTitle"
            :text="review.text"
            :points="review.points"
            :likes="review.likes"
            :dislikes="review.dislikes"
            :favorites="review.favorites"
        />
    </div>
</template>