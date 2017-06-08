import $ from 'jquery'
import Vue from 'vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
const GET_CATEGORIES = "./wsMain.asmx/GetCategories"
const GET_ITEMS = "./wsMain.asmx?op=GetItems"
Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'


export async function getCategories() {
    console.log('blody fuk    ');
    Vue.http.post(GET_CATEGORIES).then(response => {
        console.log('categories > ', response);
        return response
    }, response => {
        console.log('err > ', response);
        return { 'err': response}
    }, {headers: {'Access-Control-Allow-Origin': '*'}})
    // $.ajax({
    //     method: "POST",
    //     url: GET_CATEGORIES,
    //     success(res) {
    //         console.log(res);
    //     },
    //     error(res) {
    //         console.log('err > ', res);
    //     }
    // })
}