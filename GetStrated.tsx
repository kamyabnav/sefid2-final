<form
  action="https://formsubmit.co/YOUR_EMAIL_HERE"
  method="POST"
  className="max-w-md mx-auto flex flex-col gap-4 p-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="border rounded-lg p-3"
  />
  <input
    type="text"
    name="clinic"
    placeholder="Clinic Name"
    required
    className="border rounded-lg p-3"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="border rounded-lg p-3"
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone (optional)"
    className="border rounded-lg p-3"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white rounded-lg p-3 font-semibold hover:bg-blue-700"
  >
    Submit
  </button>
</form>
