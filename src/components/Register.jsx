import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Register() {
  return (
    <form class="container my-3">
      <div class="mb-3">
      <label for="exampleInputName" class="form-label">Name</label>
        <input type="text" class="form-control" id="exampleInputName" placeholder='Enter your Name' />
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email address' />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your password' />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">I agree that I have read all the terms and condition before submiting my credentials.</label>
      </div>
      <button type="submit" class="btn btn-primary my-2" onclick="alert('Thanks for contacting us. We are as soon as solve your problem.')">Submit</button>
    </form>
  )
}
