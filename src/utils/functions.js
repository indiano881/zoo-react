export const getImageURL = name => {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}

const time= new Date();
export const day= time.getDay();