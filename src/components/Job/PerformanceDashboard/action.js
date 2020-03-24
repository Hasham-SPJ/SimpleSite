import instance, { BASE_URL } from "../../../api/config";

export const getApplicantStats = () => {
    instance.get('http://3.134.252.39:4000/api/emotionalintelligence')
    .then(res => {

    })
    .catch(error => {
    })
}