import React from 'react'

export default function Contact() {
  return (
    <div class="container my-3">
      <form action="">
        <div class="form-group my-2">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" name="name" placeholder="Enter Your Name" />
        </div>
        <div class="form-group">
          <label for="name">Email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="Enter Your Email" />
        </div>
        <div class="form-group my-2">
          <label for="name">Phone</label>
          <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter Your Phone Number" />
        </div>
        <div class="form-group my-2">
          <label for="desc">How May We Help You ?</label>
          <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-success my-2" onclick="alert('Thanks for contacting us. We are as soon as solve your problem.')">Submit</button>
      </form>
    </div>
  )
}
