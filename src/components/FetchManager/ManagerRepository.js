import { Settings } from "./Settings"
import { fetchIt } from "./Fetch"

export default {
    // async function
    async getManagerById(id) {
        // await response of fetch call, only return once promise is resolved
        return await fetchIt(`${Settings.remoteURL}/managers/${id}`)
    },
    async createAccount(manager) {
        return await fetchIt(`${Settings.remoteURL}/managers`, "POST", JSON.stringify(manager))
    },
    async findManager(un, pwd) {
        return await fetchIt(`${Settings.remoteURL}/managers?email=${un}&password=${pwd}`)
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/managers/${id}`, "DELETE")
    },
    async getAllManagers() {
        return await fetchIt(`${Settings.remoteURL}/managers`)
    }
}
