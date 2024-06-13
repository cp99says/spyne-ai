const password_regex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})'
const jwt_secret = "cvnbkwbir"
const elastic_base_url = 'https://781c123d7e12433ab42674fc2e102b95.ap-south-1.aws.elastic-cloud.com'
const spyne_name_search_index_name = 'spyne-user-data';


module.exports = { password_regex, jwt_secret, elastic_base_url, spyne_name_search_index_name }