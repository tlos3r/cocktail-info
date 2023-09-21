import axios from "axios";

class Request {
    request = axios.create({
        baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
    });
    async searchCocktail(name: string) {
        try {
            const response = await this.request.get(`search.php?s=${name}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    async searchByFirstLetter(letter: string) {
        try {
            const response = await this.request.get(`search.php`, { params: { f: letter } });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async detailsCocktail(id: string) {
        try {
            const response = await this.request.get("lookup.php", { params: { i: id } });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
export default new Request();
