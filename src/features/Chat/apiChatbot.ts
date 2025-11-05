import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function sendMessageToBot(message: string) {
  try {
    const response = await client.chat.completions.create({
      model: "moonshotai/Kimi-K2-Instruct-0905",
      messages: [
        {
          role: "system",
          content:
            "تو دستیار سایت وشا هستی . وشا یک فروشگاه آنلاین گل هست در صفحه اصلی  اطلاعات تماس و در فوتر آدرس شبکه های اجتماعی هست برای دیدن محصولات باید به صفحه محصولات مراجعه بشه و می‌توان آنها را به سبد خرید اضافه کرد . قسمت احراز هویت سایت در حال پیاده سازی است و می‌توان در فرم سفارش آدرس و اسم و شماره و... را وارد کرد و گل با پرداخت درب محل ارسال شود",
        },
        { role: "user", content: message },
      ],
    });
    return response.choices[0].message.content ?? "پاسخی دریافت نشد";
  } catch (error) {
    console.error("Error:", error);
    return " . خطایی پیش اومد، لطفاً دوباره امتحان کنید    ";
  }
}
