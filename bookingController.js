import Booking from '../models/Booking.js'


// create new booking
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save()

        res.status(200).json({success:true,message:'Your tour is booked',data:savedBooking})
    }catch(err){
        res.status(500).json({success:false,message:'Internal server error,booking failed.Please try later.'})
    }
};
// export const CreateBooking = (req, res) => {
//     const newBooking = new Booking(req.body);
  
//     newBooking.save()
//       .then(savedBooking => {
//         res.status(200).json({
//           success: true,
//           message: 'Your tour is booked',
//           data: savedBooking
//         });
//       })
//       .catch(err => {
//         res.status(500).json({
//           success: false,
//           message: 'Internal server error,booking failed.Please try later.'
//         });
//       });
//   };
  

//get single booking
export const getBooking = async(req,res)=>{
    const _id = req.params._id

    try{
        const book = await Booking.findById(_id)

        res.status(200).json({success:true,message:"successful",data:book,});
    }
    catch(err){
        res.status(404).json({success:false,message:"Not found!"});

    }
};

//get all bookings
export const getAllBooking = async(req,res)=>{
    const id = req.params.id

    try{
        const book = await Booking.find()

        res.status(200).json({success:true,message:"successful",data:book,});
    }
    catch(err){
        res.status(500).json({success:false,message:"Internal server error,booking failed.Please try later."});

    }
};