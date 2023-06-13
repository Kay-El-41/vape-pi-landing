// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const bannerApi = createApi({
//   reducerPath: 'bannerApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://vapepiapi.shopdoora.com/vapepi/api/',
//   }),
//   tagTypes: ['bannerApi'],
//   endpoints: (builder) => ({
//     getHeroBanner: builder.query({
//       query: (token) => ({
//         url: 'Miscellaneous/GetBannerList?bannerType=1',
//         method: 'GET',
//         headers: { authorization: `Bearer ${token}` },
//       }),
//       providesTags: ['bannerApi'],
//     }),
//     getAdsBanner: builder.query({
//       query: (token) => ({
//         url: 'Miscellaneous/GetBannerList?bannerType=2',
//         method: 'GET',
//         headers: { authorization: `Bearer ${token}` },
//       }),
//       providesTags: ['bannerApi'],
//     }),
//     getPromotionBanner: builder.query({
//       query: (token) => ({
//         url: 'Product/GetLandingProductPromotion',
//         method: 'GET',
//         headers: { authorization: `Bearer ${token}` },
//       }),
//       providesTags: ['bannerApi'],
//     }),
//     getNewArrivalBanner: builder.query({
//       query: (token) => ({
//         url: 'Product/GetLandingProductLatest',
//         method: 'GET',
//         headers: { authorization: `Bearer ${token}` },
//       }),
//       providesTags: ['bannerApi'],
//     }),
//     getProductCategories: builder.query({
//       query: (token) => ({
//         url: 'Product/GetAllProductListBuyer',
//         method: 'GET',
//         headers: { authorization: `Bearer ${token}` },
//       }),
//       providesTags: ['bannerApi'],
//     }),
//   }),
// })

// export const {
//   useGetHeroBannerQuery,
//   useGetAdsBannerQuery,
//   useGetNewArrivalBannerQuery,
//   useGetProductCategoriesQuery,
//   useGetPromotionBannerQuery,
// } = bannerApi