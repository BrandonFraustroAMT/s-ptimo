import axios from "axios";
import { Constants } from "@/utils/constants/constants";
import { Prospecto } from "@/app/models/Prospecto";

export class ProspectoService {
    async getAll() {
        return await axios.get(Constants.HOST + '/prospecto/getAll');
    }
    
    async save(prospecto: Prospecto) {
        return await axios.post(Constants.HOST + '/prospecto/save', prospecto)
    }
}
