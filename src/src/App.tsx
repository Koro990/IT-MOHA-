import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans" dir="rtl">
      <header className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            IT MOHA - محمد خالد عبدالرحمن
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            متخصص في الأمن السيبراني، الذكاء الاصطناعي، وتطوير مواقع الويب. 
            خريج تقنية المعلومات مع خبرة في تقديم حلول تقنية متقدمة.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card p-6 rounded-lg border border-card-border bg-card">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              المهارات التقنية
            </h2>
            <ul className="space-y-2 text-card-foreground">
              <li>🛡️ الأمن السيبراني</li>
              <li>🤖 الذكاء الاصطناعي</li>
              <li>💻 تطوير الويب</li>
              <li>📱 تطوير التطبيقات</li>
            </ul>
          </div>
          
          <div className="card p-6 rounded-lg border border-card-border bg-card">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              اتصل بي
            </h2>
            <p className="text-card-foreground">
              يمكنك التواصل معي عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
