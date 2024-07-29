import SERVERURL from "./serverurl";
import commonAPI from "./commonAPI";

export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/register`, reqBody);
};

export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/login`, reqBody);
};

export const addBlogAPI = async (reqBody, reqHeader) => {
  // blog add
  return await commonAPI("POST", `${SERVERURL}/blog/add`, reqBody, reqHeader);
};

///////////////////////////////////////
// Home Project Api

export const homeBlogAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/get-home-blogs`, "");
};

// User Blogs Api
export const userBlogAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/user-blogs`, "", reqHeader);
};

// All Blogs

export const allBlogAPI = async (searchKey,reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/all-blogs?search=${searchKey}`, "", reqHeader);
};


// project:pid/EditBlog

export const editBlogAPI=async(pid,reqBody,reqHeader)=>{
  return await commonAPI("PUT", `${SERVERURL}/blog/${pid}/edit`, reqBody, reqHeader);
}

// project/:pid/remove

export const removeBlogAPI=async(pid,reqHeader)=>{
  return await commonAPI("DELETE", `${SERVERURL}/blog/${pid}/remove`, {},reqHeader); 
}