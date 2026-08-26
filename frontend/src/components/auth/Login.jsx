import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react'

const roles = [
  { value: 'user', label: 'User',},
  { value: 'seller', label: 'Seller'},
  { value: 'tea-board', label: 'Tea Board'},
]

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState('user')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Connect this form to the authentication API when it is available.
    console.log('Login request', { role })
  }

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#f5faf3] font-['Inter',sans-serif] text-[#153c31]">
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#dcefc9]/70 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-48 -right-32 h-[580px] w-[580px] rounded-full bg-[#f9dfbd]/60 blur-3xl" aria-hidden="true" />

      <section className="relative flex min-h-screen w-full items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <a href="/" className="mb-12 flex items-center justify-center text-lg font-bold tracking-[.16em]"><img className="mr-2 h-9 w-9 object-contain" src="/teawise-logo.png" alt="TeaCore logo" />Tea<span className="text-[#568f32]">Core</span></a>
          <div className="rounded-[1.75rem] border border-[#dce9df] bg-white p-7 shadow-[0_24px_70px_rgba(21,60,49,.08)] sm:p-10">
            <div className="mb-8"><h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Sign in</h2><p className="mt-2 text-sm text-[#6a7f76]">Choose your role and continue to TeaCore.</p></div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-[.14em] text-[#547065]">Role</span><select value={role} onChange={(event) => setRole(event.target.value)} className="w-full appearance-none rounded-xl border border-[#dce9df] bg-[#f8fbf7] px-4 py-3.5 text-sm font-medium outline-none transition focus:border-[#7ec151] focus:ring-4 focus:ring-[#7ec151]/15">{roles.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
              <label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-[.14em] text-[#547065]">Email address</span><input required type="email" placeholder="you@example.com" className="w-full rounded-xl border border-[#dce9df] bg-[#f8fbf7] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#9aaca4] focus:border-[#7ec151] focus:ring-4 focus:ring-[#7ec151]/15" /></label>
              <label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-[.14em] text-[#547065]">Password</span><span className="relative block"><input required type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="w-full rounded-xl border border-[#dce9df] bg-[#f8fbf7] px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-[#9aaca4] focus:border-[#7ec151] focus:ring-4 focus:ring-[#7ec151]/15" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#789087]" aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></span></label>
              <div className="flex items-center justify-between text-xs"><label className="flex items-center gap-2 text-[#6a7f76]"><input type="checkbox" className="accent-[#568f32]" /> Remember me</label><a href="#forgot" className="font-semibold text-[#568f32] hover:underline">Forgot password?</a></div>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1d7a59] py-4 text-sm font-semibold text-white shadow-lg shadow-[#1d7a59]/20 transition hover:-translate-y-0.5 hover:bg-[#155c42]" type="submit">Continue as {roles.find((item) => item.value === role)?.label}<ArrowRight size={17} /></button>
            </form>
            <div className="mt-8 flex items-center justify-center gap-2 border-t border-[#edf1ed] pt-6 text-xs text-[#789087]"><ShieldCheck size={15} className="text-[#568f32]" /> Your data is protected by TeaCore security</div>
          </div>
          <p className="mt-6 text-center text-sm text-[#6a7f76]">Don&apos;t have an account? <a href="#register" className="font-semibold text-[#568f32] hover:underline">Create one</a></p>
        </div>
      </section>
    </main>
  )
}

export default Login
