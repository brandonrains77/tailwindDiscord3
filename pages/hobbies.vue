<template>
        <MainLayout title={pageTitle}>

        <ul class=" w-48 text-sm font-medium rounded-lg border bg-gray-700 border-gray-600 text-white ">
            {hobbies.map((hobby) => {
                return <li class=" py-2 px-4 w-full rounded-t-lg border-b border-gray-600" >{hobby}</li>
            })}
        </ul>

        </MainLayout>
</template>

<script setup>

const pageTitle = "Hobbies"

const hobbies = [
    "Sound Stuff", 
    "Car stuff",
    "Computer Stuff"
]

</script>