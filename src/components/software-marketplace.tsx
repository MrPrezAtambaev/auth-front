import { useState } from "react"
import { ChevronDown, Star, Shield, ExternalLink } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

const softwareItems = [
  {
    id: 1,
    name: "2Captcha solver",
    icon: "🛡️",
    isOfficial: true,
    description:
      "Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.",
    rating: 4.6,
    reviews: 456,
    price: "Free",
    compatibility: "This software is designed to work with any site",
  },
  {
    id: 2,
    name: "Puppeteer plugin to solve reCAPTCHAs automatically",
    icon: "🎭",
    isOfficial: true,
    description: "Solves reCAPTCHAs automatically, using a single line of code.",
    rating: 4.6,
    reviews: 456,
    price: "$67",
    compatibility: "This software is designed to work with any site",
  },
  {
    id: 3,
    name: "2captcha-javascript",
    icon: "JS",
    isOfficial: false,
    description:
      "JavaScript npm package for easy integration with the API of 2captcha captcha solving service to bypass recaptcha, funcaptcha, geetest and solve any other captchas.",
    rating: 4.6,
    reviews: 456,
    price: "Free",
    compatibility: "This software is designed to work with any site",
  },
  {
    id: 4,
    name: "Puppeteer plugin to solve reCAPTCHAs automatically",
    icon: "🎭",
    isOfficial: false,
    description:
      "Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.",
    rating: 4.6,
    reviews: 456,
    price: "$67",
    compatibility: "This software is designed to work with any site",
  },
  {
    id: 5,
    name: "Puppeteer plugin to solve reCAPTCHAs automatically",
    icon: "🎭",
    isOfficial: false,
    description:
      "Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.",
    rating: 4.6,
    reviews: 456,
    price: "$67",
    compatibility: "This software is designed to work with any site",
  },
]

export default function SoftwareMarketplace() {
  const [visibleItems, setVisibleItems] = useState(3)
  const navigate = useNavigate();

  const toggleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate('/login');
  };

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 2, softwareItems.length))
  }

  const renderIcon = (icon: string) => {
    if (icon === "JS") {
      return (
        <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-lg">
          JS
        </div>
      )
    }
    return <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-2xl">{icon}</div>
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm border-b border-gray-200 mb-6">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SW</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Software Market</span>
          </div>
          <Button
            onClick={toggleLogout}
            variant="outline"
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Logout
          </Button>
        </div>
      </header>
      <div className="max-w-4xl mx-auto p-4">
        {/* Software Items */}
        <div className="space-y-4">
          {softwareItems.slice(0, visibleItems).map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">{renderIcon(item.icon)}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        {item.name}
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </h3>
                      {item.isOfficial && (
                        <Badge variant="secondary" className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-2">
                          <Shield className="w-3 h-3 mr-1" />
                          Official software
                        </Badge>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div
                        className={`text-lg font-semibold ${item.price === "Free" ? "text-teal-600" : "text-blue-600"}`}
                      >
                        {item.price}
                      </div>
                    </div>
                  </div>

                  {/* Compatibility */}
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    </div>
                    {item.compatibility}
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-900">{item.rating}</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span className="text-sm text-gray-500">{item.reviews} Reviews</span>
                  </div>

                  {/* Description - Hidden on mobile, shown on desktop */}
                  <p className="hidden md:block text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < softwareItems.length && (
          <div className="flex justify-center mt-8">
            <Button variant="ghost" onClick={loadMore} className="text-gray-600 hover:text-gray-900">
              Load more
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
