<template>
  <!-- <div class="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed body-bg"> -->
  <div class="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed body-bg">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <!-- header -->
      <section class="flex items-center justify-between py-4 sm:py-6">
        <div class="flex items-center gap-3 sm:gap-5">
          <Icon icon="lucide:menu" class="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          <div class="leading-none">
            <div
              class="text-sm sm:text-lg font-extrabold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              SERENO
            </div>
            <div
              class="text-sm sm:text-lg font-extrabold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              LEVANDE
            </div>
          </div>
        </div>
        <div class="flex justify-end p-4 items-center gap-3">
          <Icon
            icon="iconamoon:profile-bold"
            class="text-[#ACFFCB] w-7 h-7 sm:w-9 sm:h-9"
          />
        </div>
      </section>

      <!-- details -->
      <section v-if="loading" class="text-center text-gray-400 mt-10">
        Loading property details...
      </section>
      <section v-else class="mt-6 sm:mt-10 lg:mt-12">
        <!-- Title + Price -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <!-- Title -->
          <div
            class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
          >
            <h1
              class="text-lg sm:text-2xl lg:text-3xl font-extrabold montserrat leading-tight"
            >
              {{ property?.property_name }}
            </h1>
          </div>

          <!-- Price -->
          <div
            class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
          >
            <p class="text-sm sm:text-lg lg:text-xl font-extrabold montserrat">
              {{ property?.base_price_per_night
              }}<span class="text-xs sm:text-sm text-gray-300">/month</span>
            </p>
          </div>
        </div>

        <!-- Description -->
        <p
          class="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed break-words"
        >
          {{ property?.description }}
        </p>

        <div class="mt-5 sm:mt-6">
          <img
            :src="imageBase + property?.photos?.[0]?.path"
            alt="Property"
            class="w-full h-[220px] sm:h-[320px] lg:h-[450px] rounded-2xl object-cover"
          />
        </div>

        <div class="mt-3 sm:mt-4 flex flex-wrap gap-3">
          <img
            src="/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
            class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg object-cover"
            alt="thumb"
          />
          <img
            src="/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
            class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg object-cover"
            alt="thumb"
          />
          <img
            src="/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
            class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg object-cover"
            alt="thumb"
          />
          <img
            src="/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
            class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg object-cover"
            alt="thumb"
          />
        </div>
      </section>

      <!-- about -->
      <section class="mt-6 sm:mt-10">
        <div class="bg-[#0B130B] rounded-xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <!-- Header -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5"
          >
            <!-- Title -->
            <h2
              class="text-lg sm:text-2xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              About This Property
            </h2>

            <!-- Button -->
            <button
              class="text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition w-full sm:w-auto"
            >
              Book Your Property
            </button>
          </div>

          <!-- Feature Grid -->
          <div
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-white"
          >
            <div class="flex items-center gap-3">
              <Icon icon="lucide:bed-double" class="w-5 h-5 text-[#ACFFCB]" />
              <span>2 Bed</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:bath" class="w-5 h-5 text-[#ACFFCB]" />
              <span>4 Bathrooms</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:home" class="w-5 h-5 text-[#ACFFCB]" />
              <span>3,000 Sqft</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:compass" class="w-5 h-5 text-[#ACFFCB]" />
              <span>North Facing</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="ph:building-apartment-light" class="w-5 h-5 text-[#ACFFCB]" />
              <span>2 Balcony</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:sofa" class="w-5 h-5 text-[#ACFFCB]" />
              <span>Furnished</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon
                icon="material-symbols:elevator-sharp"
                class="w-5 h-5 text-[#ACFFCB]"
              />
              <span>2 Elevator</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:parking-circle" class="w-5 h-5 text-[#ACFFCB]" />
              <span>1 Parking</span>
            </div>
          </div>
        </div>
      </section>

      <!-- description -->
      <section class="mt-6 sm:mt-10">
        <div class="bg-[#0B130B] rounded-xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <h2
            class="text-lg sm:text-2xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-4"
          >
            Description
          </h2>
          <p
            class="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed break-words"
          >
            {{ property?.description || "" }}
          </p>
        </div>
      </section>

      <!-- Property Section -->
      <section class="w-full pt-16 sm:pt-24 lg:pt-32">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat text-center bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-8 pb-[4px] sm:mb-12"
        >
          Property Highlights
        </h2>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Left Button -->
          <button
            class="swiper-button-prev-custom absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center text-white"
          >
            ‹
          </button>

          <!-- Right Button -->
          <button
            class="swiper-button-next-custom absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center text-white"
          >
            ›
          </button>

          <!-- Swiper -->
          <Swiper
            v-if="properties.length"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :loop="properties.length >= 3"
            :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 220,
              modifier: 1,
              slideShadows: false,
            }"
            :pagination="{ clickable: true }"
            :navigation="{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }"
            :modules="modules"
            class="propertySwiper"
          >
            <SwiperSlide
              v-for="property in properties"
              :key="property.id"
              class="property-slide"
            >
              <!-- Card -->
              <div
                @click="goToDetails(property.id)"
                class="bg-[#0E1B01]/80 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition"
              >
                <div class="h-[160px] overflow-hidden">
                  <img
                    :src="imageBase + property?.photos?.[0]?.path"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="p-3 text-white">
                  <div class="flex justify-between">
                    <h3 class="font-semibold text-sm line-clamp-2">
                      {{ property.property_name }}
                    </h3>

                    <div
                      class="font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent text-sm"
                    >
                      ${{ property.base_price_per_night }}
                    </div>
                  </div>

                  <p class="text-xs text-gray-300 mb-2">Flat for sale</p>

                  <div class="flex justify-between text-xs text-gray-300">
                    <span class="flex items-center gap-1">
                      <Icon icon="material-symbols:bed-outline-rounded" />
                      2 Bedrooms
                    </span>
                    <span>📐 214m²</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <!-- fallback -->
          <p v-else class="text-center text-gray-400 mt-6">
            No properties available right now.
          </p>
        </div>
      </section>

      <!-- what our client says -->
      <section class="w-full pt-16 sm:pt-24">
        <div
          class="flex flex-col lg:flex-row items-start justify-between mb-12 gap-6 lg:gap-0"
        >
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent max-w-full lg:max-w-[650px]"
          >
            What Do Our Clients Say About Us
          </h2>
          <div class="flex gap-4 lg:mt-0">
            <button class="rounded-full bg-white p-3 transition-colors hover:bg-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-[#ACFFCB]"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <button
              class="rounded-full bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] p-3 transition-colors hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-black"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Testimonials Carousel -->
        <div
          class="overflow-x-auto scroll-smooth flex gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          <!-- Testimonial Card (repeat for each) -->
          <div
            class="flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto flex flex-col rounded-xl bg-[#0B1F00] p-4 snap-start"
          >
            <div class="mb-4 flex items-start justify-between">
              <Icon
                icon="ri:double-quotes-r"
                style="color: #acffcb; font-size: 25px"
              ></Icon>
              <div class="flex gap-1">
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
              </div>
            </div>
            <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
              The property exceeded all expectations! From the thoughtful design to the
              seamless check-in process, everything was perfect. Highly recommend for
              anyone looking for quality accommodation.
            </p>
            <div class="mt-auto flex items-center gap-3">
              <div>
                <p class="text-sm font-semibold leading-tight text-white">John Smith</p>
                <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                  <img
                    src="/images/pro-03.webp"
                    alt="Profile"
                    class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                  />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <!-- card 2 -->
          <div
            class="flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto flex flex-col rounded-xl bg-[#0B1F00] p-4 snap-start"
          >
            <div class="mb-4 flex items-start justify-between">
              <Icon
                icon="ri:double-quotes-r"
                style="color: #acffcb; font-size: 25px"
              ></Icon>
              <div class="flex gap-1">
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
              </div>
            </div>
            <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
              The property exceeded all expectations! From the thoughtful design to the
              seamless check-in process, everything was perfect. Highly recommend for
              anyone looking for quality accommodation.
            </p>
            <div class="mt-auto flex items-center gap-3">
              <div>
                <p class="text-sm font-semibold leading-tight text-white">John Smith</p>
                <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                  <img
                    src="/images/pro-03.webp"
                    alt="Profile"
                    class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                  />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto flex flex-col rounded-xl bg-[#0B1F00] p-4 snap-start"
          >
            <div class="mb-4 flex items-start justify-between">
              <Icon
                icon="ri:double-quotes-r"
                style="color: #acffcb; font-size: 25px"
              ></Icon>
              <div class="flex gap-1">
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
              </div>
            </div>
            <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
              The property exceeded all expectations! From the thoughtful design to the
              seamless check-in process, everything was perfect. Highly recommend for
              anyone looking for quality accommodation.
            </p>
            <div class="mt-auto flex items-center gap-3">
              <div>
                <p class="text-sm font-semibold leading-tight text-white">John Smith</p>
                <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                  <img
                    src="/images/pro-03.webp"
                    alt="Profile"
                    class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                  />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto flex flex-col rounded-xl bg-[#0B1F00] p-4 snap-start"
          >
            <div class="mb-4 flex items-start justify-between">
              <Icon
                icon="ri:double-quotes-r"
                style="color: #acffcb; font-size: 25px"
              ></Icon>
              <div class="flex gap-1">
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
              </div>
            </div>
            <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
              The property exceeded all expectations! From the thoughtful design to the
              seamless check-in process, everything was perfect. Highly recommend for
              anyone looking for quality accommodation.
            </p>
            <div class="mt-auto flex items-center gap-3">
              <div>
                <p class="text-sm font-semibold leading-tight text-white">John Smith</p>
                <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                  <img
                    src="/images/pro-03.webp"
                    alt="Profile"
                    class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                  />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto flex flex-col rounded-xl bg-[#0B1F00] p-4 snap-start"
          >
            <div class="mb-4 flex items-start justify-between">
              <Icon
                icon="ri:double-quotes-r"
                style="color: #acffcb; font-size: 25px"
              ></Icon>
              <div class="flex gap-1">
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
              </div>
            </div>
            <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
              Excellent stay! Staff was super friendly and the location is perfect. Very
              comfortable and clean property.
            </p>
            <div class="mt-auto flex items-center gap-3">
              <div>
                <p class="text-sm font-semibold leading-tight text-white">Jane Doe</p>
                <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                  <img
                    src="/images/pro-02.jpg"
                    alt="Profile"
                    class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                  />
                  <span>Chittagong, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- asked quesiton section faq-->
      <section class="w-full pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-4 sm:mb-6"
          >
            Frequently Asked Questions
          </h2>
          <p
            class="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
          >
            Have questions about renting houses? <br />
            Our FAQ section gives you clear and simple answers to guide your journey.
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="w-full max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <!-- FAQ Card Template -->
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-white/20 bg-[#0B130B]/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/40 transition"
          >
            <!-- Question Button -->
            <button
              @click="toggleFAQ(index)"
              class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center text-left group"
            >
              <h3
                class="text-sm sm:text-base lg:text-lg font-semibold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
              >
                {{ faq.question }}
              </h3>

              <!-- + / - icon -->
              <span
                class="text-white/60 group-hover:text-white transition text-xl sm:text-2xl"
              >
                {{ openIndex === index ? "−" : "+" }}
              </span>
            </button>

            <!-- Answer -->
            <div
              v-show="openIndex === index"
              class="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 border-t border-white/10 pt-2"
            >
              <p class="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- footer -->
    <section
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 py-8 gap-4 relative bg-cover bg-bottom bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-12 pt-20 w-full overflow-hidden footer-bg"
    >
      <div class="col-span-1 sm:col-span-2 lg:col-span-3">
        <h2
          class="text-lg sm:text-xl md:text-xl lg:text-xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-4 sm:mb-6"
        >
          SERENO
          <br />
          LEVANDE
        </h2>

        <p class="text-sm sm:text-base md:text-lg py-3 text-white">
          Your trusted partner for finding safe, verified, and professional housing
          solutions worldwide.
        </p>
        <div class="flex items-center gap-4 pt-0 md:pt-4 flex-wrap">
          <a href="#"><Icon icon="logos:facebook" style="font-size: 30px"></Icon> </a>
          <a href="#"
            ><Icon icon="skill-icons:instagram" style="font-size: 30px"></Icon
          ></a>
          <a href="#" class="text-white text-[30px]">
            <Icon icon="skill-icons:twitter"></Icon>
          </a>
          <a href="#"><Icon icon="logos:linkedin-icon" style="font-size: 30px"></Icon></a>
        </div>
      </div>
      <div class="col-span-1 sm:col-span-1 lg:col-span-1">
        <h3
          class="text-sm sm:text-base md:text-lg lg:text-lg font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent pb-2"
        >
          Quick Links
        </h3>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3">About Us</p>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3">How It Works</p>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3">FAQ</p>
      </div>
      <div class="col-span-1 sm:col-span-2 lg:col-span-2">
        <h3
          class="text-sm sm:text-base md:text-lg lg:text-lg font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent pb-2"
        >
          Contact Us
        </h3>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3 flex gap-2 items-center">
          <Icon icon="mdi:map-marker" style="color: #acffcb; font-size: 20px"></Icon>
          <span class="break-words">House 123, Road 45, Gulshan 2, Dhaka 1212</span>
        </p>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3 flex gap-2 items-center">
          <Icon
            icon="mingcute:phone-fill"
            style="color: #acffcb; font-size: 20px; align-items: center"
          ></Icon
          >+880 1234-567890
        </p>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3 flex gap-2 items-center">
          <Icon icon="clarity:email-solid" style="color: #acffcb; font-size: 20px"></Icon
          >info@serenobd.com
        </p>
      </div>
      <hr
        class="col-span-1 sm:col-span-2 lg:col-span-6 mb-8 border-white border-opacity-15"
      />
      <div class="col-span-1 sm:col-span-2 lg:col-span-3">
        <p
          class="text-xs sm:text-sm font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
        >
          © 2025. All rights Reserved.
        </p>
      </div>
      <div
        class="col-span-1 sm:col-span-2 lg:col-span-3 items-center justify-evenly flex"
      >
        <ul class="flex items-center gap-6 text-white">
          <li>
            <a class="group relative inline-block text-[14px] no-underline" href="#"
              >Privacy Policy
            </a>
          </li>
          <li>
            <a class="group relative inline-block text-[14px] no-underline" href="#"
              >Terms &amp; Conditions</a
            >
          </li>
          <li>
            <a class="group relative inline-block text-[14px] no-underline" href="#"
              >Cookie Policy</a
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { apiBase } from "@/utilities/config.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { watch } from "vue";

const route = useRoute();
const router = useRouter();
const loading = ref(false);

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, Navigation];

// Slider buttons
const slider = ref(null);
const slideLeft = () => {
  slider.value.scrollBy({ left: -260, behavior: "smooth" });
};
const slideRight = () => {
  slider.value.scrollBy({ left: 260, behavior: "smooth" });
};

// get api for property highlights
const properties = ref([]);

const fetchProperties = async () => {
  try {
    const response = await axios.get(`${apiBase}property/toplist`);
    properties.value = response.data.data || [];
  } catch (error) {
    console.error("Error fetching properties:", error);
  }
};

// image path variable
const imageBase = "https://hauslyapi.scfnaogaon.org/storage/";

// toggle FAQ
const openIndex = ref(null);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
// get api for FAQ
const faqs = ref([]);
const fetchFAQ = async () => {
  try {
    const res = await axios.get(`${apiBase}faqs`);
    faqs.value = res.data.faqs || [];
  } catch (error) {
    console.error("Error fetching FAQ:", error);
  }
};

// go to signle details
const propertyId = ref(route.params.id);

const property = ref(null);
const fetchSingleProperty = async () => {
  loading.value = true;
  try {
    const res = await axios.get(`${apiBase}properties/${propertyId.value}`);
    property.value = res.data.data;
  } catch (error) {
    console.log("error", error);
  }
  loading.value = false;
};
watch(
  () => route.params.id,
  (newId) => {
    propertyId.value = newId;
    fetchSingleProperty();
  }
);
// gotodetails
const goToDetails = (id) => {
  router.push({ name: "property-details", params: { id } });
};

onMounted(() => {
  fetchProperties();
  fetchSingleProperty();
  fetchFAQ();
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap");

.body-bg {
  background-image: url("/images/Landing_Page.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.footer-bg {
  background-image: url("/images/WhatsApp Image 2026-01-21 at 10.33.39 AM.jpeg");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  min-height: 100%;
}

.montserrat {
  font-family: "Montserrat", sans-serif;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.propertySwiper {
  padding-bottom: 40px;
}

.property-slide {
  width: 220px;
}

@media (min-width: 640px) {
  .property-slide {
    width: 260px;
  }
}

@media (min-width: 1024px) {
  .property-slide {
    width: 300px;
  }
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  transition: 0.3s;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
