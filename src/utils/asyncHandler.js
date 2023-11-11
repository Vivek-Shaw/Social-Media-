// This is a wrapper function we created and this is one method to use 
// 1. Using promise

const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err))
    }
}

export {asyncHandler}

//2. using try catch

// const asyncHandler = (fn) => async(req, res, next)=>{
//     try{
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }