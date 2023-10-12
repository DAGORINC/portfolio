import axios from "axios";

const addCount = async (pageName: string) => {
    const url = `http://46.41.139.43:3001/page/${pageName}`;
    // const url = `http://localhost:3000/page/${pageName}`;

    try {
        const res = await axios.get(url)
        
        return 'Success';
    } catch (error) {
        return 'error: '+error;
    }
}

const CountsController = {
    addCount
}

export default CountsController;