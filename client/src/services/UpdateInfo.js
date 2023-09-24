import Api from "@/services/Api";

export default {
    updateInfo(credentials) {
        return Api().post('updateInfo', credentials);
    }
}
