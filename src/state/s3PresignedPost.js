import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        FETCH_S3_PRESIGNEDPOST: async (context, params) => {
            Axios.get(`http://localhost:5002/s3presignedpost?path=${params.image}`, {
                headers: new Headers({
                    'Access-Control-Allow-Origin': 'http://localhost:5002',
                }),
            }).then(res => {
                context.commit('POPULATE_PRESIGNEDPOST', res.json());
            });
        },

        // FETCH_SEND_S3_PRESIGNEDPOST: async (context, params) => {
        //     let json;
        //
        //     const formData = new FormData();
        //     Object.keys(params.fields).forEach(key => {
        //         formData.append(key, params.fields[key]);
        //     });
        //
        //     formData.append('file', params.file);
        //
        //     try {
        //         const saveImg = await fetch(`${params.url}`, {
        //             body: formData,
        //             headers: {
        //                 'Access-Control-Allow-Credentials': true,
        //                 'Access-Control-Allow-Origin': '*',
        //             },
        //             method: 'POST',
        //         });
        //         if (saveImg.ok) {
        //             const invalidation = await Fetcher(`${process.env.VUE_APP_SERVICES_ENDPOINT_BASE_USER}/${params.id}/s3presignedpost`, {
        //                 body: JSON.stringify(params.filename),
        //                 headers: {
        //                     Accept: 'application/json, text/plain, */*',
        //                     'Content-Type': 'application/json',
        //                 },
        //                 method: 'POST',
        //             });
        //             json = await invalidation.json();
        //         } else {
        //             json = await saveImg.json();
        //         }
        //     } catch (e) {
        //         json = {
        //             code: 400,
        //             message: 'Impossível salvar a imagem. Tente novamente',
        //         };
        //     }
        //     context.commit('POPULATE_UPLOADFEEDBACK', json);
        // },
    },
    getters: {
        GET_PRESIGNEDPOST: state => state.presignedpost,
        GET_UPLOADFEEDBACK: state => state.uploadfeedback,
    },
    modules: {
    },
    mutations: {
        POPULATE_PRESIGNEDPOST: (state, payload) => {
            if (payload) {
                state.presignedpost = payload;
            }
        },
        POPULATE_UPLOADFEEDBACK: (state, payload) => {
            if (payload) {
                state.uploadfeedback = payload;
            }
        },
    },
    namespaced: true,
    state: {
        presignedpost: null,
        uploadfeedback: null,
    },
});
