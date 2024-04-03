
import news from './model/new-schema.js';
import { data } from './constants/data.js';

const DefaultData = async () => {
    try {
        await news.insertMany(data);
        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;