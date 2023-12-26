import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query({
            query: (email) =>
                `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_PER_PAGE}`,
        }),
        getConversation: builder.query({
            query: ({userEmail, participantEmail}) =>
                `/conversations?participants_like=${userEmail}-${participantEmail}&&participants_like=${participantEmail}-${userEmail}`,
        }),
        addConversation: builder.mutation({
            query: (data) =>({
                url: '/conersations',
                method: 'POST',
                body: data
            }) 
        }),
        editConversation: builder.mutation({
            query: ({id,data}) =>({
                url: '/conersations/${id}',
                method: 'PATCH',
                body: data
            }) 
        }),
    }),
});

export const { useGetConversationsQuery, useGetConversationQuery, useAddConversationMutation, useEditConversationMutation} = conversationsApi;