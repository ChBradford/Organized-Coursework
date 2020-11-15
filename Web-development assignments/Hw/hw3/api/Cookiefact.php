<?php
$facts = array("The world’s oldest piece of chewing gum is over 9,000 years old!"
,"A coyote can hear a mouse moving underneath a foot of snow."
,"Bolts of lightning can shoot out of an erupting volcano."
,"New York drifts about one inch farther away from London each year."
,"A U.S. dollar bill can be folded approximately 4,000 times in the same place before it will tear."
,"10% of the World’s population is left handed."
,"A hippo’s wide open mouth is big enough to fit a 4-foot-tall child in."
,"95% of people text things they could never say in person."
,"A Swedish woman lost her wedding ring, and found it 16 years later- growing on a carrot in her garden."
,"Avocados are poisonous to birds.");

echo json_encode($facts[rand(0,9)]);
?>