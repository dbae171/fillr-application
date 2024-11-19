// app/page.js
//HOMEPAGE

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from'next/link';

export default function HomePage() {
  return (
    
    <div className="bg-dot-grid flex flex-col items-center p-8 space-y-12">
      {/*Main Heading*/}
      <header className="text-center ">
        <h1 className="text-6xl font-bold text-slate-800">Fillr.ai </h1>
        <h2 className="text-2xl font-slate-bold mt-2 text-slate-500">Make Inventory Management Easy with AI Integration</h2>
      </header>
      <Link href="/auth/signup">
        <Button className="hover:bg-slate-400">Get Started</Button>
      </Link>

      {/*Image section*/}
      <section className="flex flex-col md:flex-row gap-8 w-full justify-center py-20">
        <div className="w-full md:w-1/3 h-48 flex items-center justify-center">
          <Image src="/frontpage.png" alt="image for landing page" width={340} height={150} />
        </div>
        
      </section>
      {/*Solution Section*/}

      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Solutions ⬇</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="flex flex-col items-center text-center space-y-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">📦 Inventory Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-800">
                A simple and flexible inventory management system already in place for your employees to use!
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">🔔 Notification & Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-800">
                Once your employees submit their inventory check, a generated report will be sent right through your email.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">📊 Dashboard Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A Dashboard that holds all previous and current inventory reports from your employees.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">📥 Instant Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get a report generated right into your dashboard after your employee submits their inventory checklist.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">⏰ Scheduling Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Set a recurring schedule for your employees to be notified to check inventory in whatever way suites your business best!
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">🤖 Artificial Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
              beep boob booppppeepp!! Yea, that's right. We integrate AI that collects data to give you insight to help improve your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
