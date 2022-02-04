# Assignment

1. Open `week-4/assignments/assignment.xml` in your editor
2. Create xsl file and add link to it
3. Display catalog in the following way

- main title is "Catalog"
- use html list tag to display catalog
- render each item as `<article>` inside list item tag
- display product id as h3
- display product description as paragraph
- render table of cataaalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)
- for gender column render M for Men, W for Women
- inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image

Create `week-4/assignments/assignment_YOURNAME.md` and explain your thought process in it. Add screenshots of each step to the file (Refer `week-1/assignments/evaluation-1.md` on how to add image to md file)

I created the xsl file for the xml given.I created a html catalog tag and i displayed id as h3 and added a paragraph for product description.
I then added the following table header Price,Gender,Small,Medium,Large,Extra Large for catalog item.

I have categorised gender as M for Man and W for Women , i have used the <xsl:choose> to express this conditional statement. I have displayed image and color as <th> tag and also added multiple if conditions for small , medium and large size's
