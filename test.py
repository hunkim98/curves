# imports
from PIL import Image
import aggdraw

# setup
img = Image.new("RGBA", (1000,1000)) # last part is image dimensions
draw = aggdraw.Draw(img)
outline = aggdraw.Pen("black", 5) # 5 is the outlinewidth in pixels
fill = aggdraw.Brush("yellow")

# the pathstring:
#m for starting point
#c for bezier curves
#z for closing up the path, optional
#(all lowercase letters for relative path)
pathstring = " m0,0 c300,300,700,600,300,900 z"

# create symbol
symbol = aggdraw.Symbol(pathstring)

# draw and save it
xy = (20,20) # xy position to place symbol
draw.symbol(xy, symbol, outline, fill)
draw.flush()
img.save("testbeziercurves.png") # this image gets saved to same folder as the script
