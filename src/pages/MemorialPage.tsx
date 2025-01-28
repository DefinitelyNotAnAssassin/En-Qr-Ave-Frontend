'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Edit } from 'lucide-react'


const Image = ({ src, alt, fill, className, width, height }) => (
    <img src={src} alt={alt} className={`object-cover w-full h-full ${className}`} width={width} height={height} />
)

export default function MemorialPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Cover Photo Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://placehold.co/420x420?text=Cover+Photo"
          alt="Cover Photo"
          fill
          className="object-cover"
          
        />
        {/* QR Code */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-lg p-2">
          <Image
            src="https://placehold.co/420x420?text=QR"
            alt="QR Code"
            width={64}
            height={64}
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Profile Picture */}
        <div className="absolute -top-24 left-4 w-[168px] h-[168px] rounded-full border-4 border-background overflow-hidden">
          <Image
            src="https://placehold.co/420x420?text=Profile"
            alt="Profile Picture"
            width={168}
            height={168}
            className="object-cover"
          />
        </div>

        {/* Memorial Info */}
        <div className="pt-24 pl-[200px]">
          <div className="text-muted-foreground">In loving memory</div>
          <h1 className="text-3xl font-bold mt-1">Juan Dela Cruz</h1>
          <div className="text-muted-foreground mt-1">October 24, 1980 - October 24, 2024</div>
          <div className="text-muted-foreground">Resting at 12 Alfonso St. Manggahan, Pasig City</div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 border-b">
          <Tabs defaultValue="biography" className="w-full">
            <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="biography"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-8 py-4"
              >
                Biography
              </TabsTrigger>
              <TabsTrigger 
                value="photos"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-8 py-4"
              >
                Photo & Videos
              </TabsTrigger>
              <TabsTrigger 
                value="tribute"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-8 py-4"
              >
                Tribute
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Biography Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Biography</h2>
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
          <div className="prose max-w-none">
            <p>
              Juan Dela Cruz was a beloved father, husband, and friend who touched countless lives with his warmth and generosity. 
              Born and raised in Pasig City, he dedicated his life to serving his community and bringing joy to those around him.
            </p>
            <p className="mt-4">
              He will be remembered for his infectious laugh, his passion for helping others, and his unwavering dedication to his family. 
              His legacy lives on through the countless lives he touched and the memories we share.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

