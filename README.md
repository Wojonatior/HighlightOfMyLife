# HighlightOfMyLife

![Show me the bidness](http://g.recordit.co/DHt3Gt9MTi.gif)



### What It Is
This is the most useless javascript library that you've ever encountered that you never knew you wanted. It changes your highlight color based on the content highlighted.


### Get It
The library is currently avialable as a drop in javascript library. The library will soon be available as an extension for Chrome.

### How It Works

Currently a function is bound to the mouseup event to detect when new text is selected. Afterwards the text is processed in 4 steps

#### Step 1
Replace all non-hex characters in the string with `0`.

#### Step 2
Pad the string out to the nearest multiple of 3 with `0`s.

#### Step 3
Get the first two characters from each third of the string.

#### Step 4
Finally these 6 characters are assigned as the new text highlighting color. 
