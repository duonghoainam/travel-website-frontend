import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_APP_PASSWORD


export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: "ahihimailne@gmail.com",
        pass: "fpdmfhvrhcfubudc",
    }
})

export const mailOptions = {
    from: "a.com",
    to: email,
}