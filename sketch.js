//Name : geumbi Yeo
//Assignment name : make_a_game
//Course number : CS099
//Term&Year : 202101sg-Spring

let mouseWasPressed = false;
let CurrentScreen = MAIN_MENU;
let school1_img;
let school2_img;
let school3_img;
let school4_img;
let student_img;
let student2_img;
let post_img;
let x_img;
let key_img;
let door_img;
let teachersroom_img;
let hand_img;
let smartphone_img;
let window_img;
let running_img;
let ghost_img;
let ground_img;
let ghost2_img;

let student2_width = 60
let student2_height = 45
let x = 10
let y = 0
let x1 = 767
let y1 = 520
let camera_x = 0;
let camera_y = 0;
let running_x = 150;
let running_y = 310;
let ghost_x = -100;
let ghost_y = 310;



let a_x = 0
let b_x = 70
let c_x = 140
let d_x = 210
let e_x = 280
let f_x = 350
let g_x = 420
let h_x = 490
let i_x = 560
let j_x = 630
let k_x = 700
let l_x = 770


let a_y = 0
let b_y = 50
let c_y = 110
let d_y = 170
let e_y = 230
let f_y = 290
let g_y = 350
let h_y = 410
let i_y = 470
let j_y = 530
let k_y = 590
let l_y = -10

function setup()
{
    createCanvas( 840, 600 );
    school1_img = loadImage('assets/school1.jpg')
    school2_img = loadImage('assets/school2.jpg')
    school3_img = loadImage('assets/school3.jpg')
    school4_img = loadImage('assets/school4.jpg')
    student_img = loadImage('assets/student.png')
    student2_img = loadImage('assets/student2.png')
    post_img = loadImage('assets/post.png')
    x_img = loadImage('assets/x.png')
    key_img = loadImage('assets/key.png')
    door_img = loadImage('assets/door.png')
    teachersroom_img = loadImage('assets/teachersroom.jpg')
    hand_img = loadImage('assets/hand.png')
    smartphone_img = loadImage('assets/smartphone.png')
    window_img = loadImage('assets/window.png')
    running_img = loadImage('assets/running.png')
    ghost_img = loadImage('assets/ghost.png')
    ground_img = loadImage('assets/ground.jpg')
    ghost2_img = loadImage('assets/ghost2.jpg')

}

function draw()
{
    background( 'white' );


    switch (CurrentScreen)
    {
        case MAIN_MENU:     
        {
            let start_button_left = 120
            let start_button_top = 200
            let start_button_width = 600
            let start_button_height = 70

            let menu_button_left = 120
            let menu_button_top = 300
            let menu_button_width = 600
            let menu_button_height = 70

            
            
            
            background('black')
            fill(0,0,0,150)
            rect(0,0,800,600)
            textSize(60)
            fill('white')
            textStyle(BOLDITALIC)
            text('Escape from School',140,80)

            //start_button
            fill(255,255,255,150)
            rect( start_button_left,start_button_top,start_button_width,start_button_height )
            rect( menu_button_left,menu_button_top,menu_button_width,menu_button_height )
            textSize(30)
            fill('black')
            textStyle(BOLDITALIC)
            text('Game Start',340,245)
            text('Menu',370,345)

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
               //start_game
               {
                const mouse_is_within_X_range = mouseX >= start_button_left && mouseX < start_button_left + start_button_width;
                const mouse_is_within_Y_range = mouseY > start_button_top && mouseY < start_button_top + start_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_1;
                }
   
                }

                //menu
               {
                const mouse_is_within_X_range = mouseX >= menu_button_left && mouseX < menu_button_left + menu_button_width;
                const mouse_is_within_Y_range = mouseY > menu_button_top && mouseY < menu_button_top + menu_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = MENU_SCREEN;
                }
   
                }

            }

        }
        break;
        case GAME_SCREEN_1: 
        {
            let next_button_left = 720
            let next_button_top = 320
            let next_button_width = 100
            let next_button_height = 50

            background(school2_img)
            fill(0,0,0,200)
            rect(0,0,840,600)
            textSize(60)
            fill(255,255,255,150)
            image(student_img,470,30,350,270)
            rect(0,300,840,300)
            textSize(30)
            fill('black')
            text('I fell asleep in class and no one woke me up.', 70,420)
            text("It's already dark!",70,460)
            text("There's a rumor about ghosts coming out of school.",70,500)
            text("Let's get home safe!",70,540)
            push()
            textStyle(BOLDITALIC)
            text('David', 70,350)
            fill('white')
            rect(next_button_left,next_button_top,next_button_width,next_button_height)
            fill('black')
            text('next',735,355)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  next_button_left && mouseX <  next_button_left +  next_button_width;
                const mouse_is_within_Y_range = mouseY >  next_button_top && mouseY <  next_button_top +  next_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_2;
                }
       
                }
               

            }

            

        }
        break;
        case GAME_SCREEN_2:
        {
            let x_button_left = 257
            let x_button_top = 127
            let x_button_width = 30
            let x_button_height = 30

            background(school2_img)
            fill(0,0,0,200)
            rect(0,0,840,600)
            image(post_img,width/4+30,height/4-50,400,400)
            image(x_img,260,130,25,25)
            push()
            textSize(19)
            textStyle(BOLDITALIC)
            fill('black')
            text("The classroom door is locked.",310,300)
            text("Let's find the key.",310,340)
            pop()
            
            push()
            fill(0,0,0,0)
            noStroke()
            rect(x_button_left,x_button_top,x_button_width,x_button_height)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  x_button_left && mouseX <  x_button_left +  x_button_width;
                const mouse_is_within_Y_range = mouseY >  x_button_top && mouseY <  x_button_top +  x_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_3;
                }
       
                }
               

            }

        }
        break;
        case GAME_SCREEN_3:
        {
            let secret_left = 20
            let secret_top = 295
            let secret_width = 60
            let secret_height = 60

            background(school2_img)
            fill(0,0,0,200)
            rect(0,0,840,600)
            push()
            textSize(20)
            textStyle(BOLDITALIC)
            fill('white')
            stroke('black')
            text('click the screen',20,40)
            fill(0,0,0,0)
            noStroke()
            rect(secret_left,secret_top,secret_width,secret_height)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  secret_left && mouseX <  secret_left +  secret_width;
                const mouse_is_within_Y_range = mouseY >  secret_top && mouseY <  secret_top +  secret_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_4
                }
       
                }
               

            }

        }
        break;

        case GAME_SCREEN_4 : 
        {
            let next_button_left = 720
            let next_button_top = 320
            let next_button_width = 100
            let next_button_height = 50

            background(school2_img)
            fill(0,0,0,200)
            rect(0,0,840,600)
            textSize(60)
            fill(255,255,255,150)
            image(student_img,470,30,350,270)
            rect(0,300,840,300)
            textSize(30)
            fill('black')
            text('I find the key!!', 70,420)
            text("Let's open the door and go out the hall.",70,460)
            push()
            textStyle(BOLDITALIC)
            text('David', 70,350)
            fill('white')
            rect(next_button_left,next_button_top,next_button_width,next_button_height)
            fill('black')
            text('next',735,355)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  next_button_left && mouseX <  next_button_left +  next_button_width;
                const mouse_is_within_Y_range = mouseY >  next_button_top && mouseY <  next_button_top +  next_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_5;
                }
       
                }
               

            }

        }
        break;

        case GAME_SCREEN_5 :
        {
            let door_left = 720
            let door_top = 180
            let door_width = 85
            let door_height = 100

            background(school2_img)
            push()
            fill(0,0,0,200)
            rect(0,0,840,600)
            image(key_img,mouseX-30,mouseY-30,70,70)
            fill(0,0,0,0)
            noStroke()
            rect(door_left,door_top,door_width,door_height)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  door_left && mouseX <  door_left +  door_width;
                const mouse_is_within_Y_range = mouseY >  door_top && mouseY <  door_top +  door_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_6;
                }
       
                }
               

            }
        }
        break;

        case GAME_SCREEN_6 :
        {
            let next_button_left = 720
            let next_button_top = 320
            let next_button_width = 100
            let next_button_height = 50

            background(school1_img)
            fill(0,0,0,150)
            rect(0,0,840,600)
            textSize(60)
            fill(255,255,255,150)
            image(student_img,470,30,350,270)
            rect(0,300,840,300)
            textSize(30)
            fill('black')
            text("Let's go to the teacher's room.", 70,420)
            push()
            textStyle(BOLDITALIC)
            text('David', 70,350)
            fill('white')
            rect(next_button_left,next_button_top,next_button_width,next_button_height)
            fill('black')
            text('next',735,355)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  next_button_left && mouseX <  next_button_left +  next_button_width;
                const mouse_is_within_Y_range = mouseY >  next_button_top && mouseY <  next_button_top +  next_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_7;
                }
       
                }
               

            }
        }
        break;

        case GAME_SCREEN_7:
        {
            
            const maze1_width = 1
            const maze1_height = 60

            const maze2_width = 70
            const maze2_height = 1

            background('black')
            fill('white')
            noStroke()
            rect(c_x,a_y,maze1_width,maze1_height)
            rect(c_x,b_y,maze1_width,maze1_height)
            rect(d_x,b_y,maze1_width,maze1_height)
            rect(d_x,c_y,maze1_width,maze1_height)
            rect(f_x,a_y,maze1_width,maze1_height)
            rect(f_x,b_y,maze1_width,maze1_height)
            rect(f_x,c_y,maze1_width,maze1_height)
            rect(f_x,e_y,maze1_width,maze1_height)
            rect(f_x,d_y,maze1_width,maze1_height)

            rect(d_x,b_y,maze2_width,maze2_height)
            rect(d_x,c_y,maze2_width,maze2_height)
            rect(b_x,c_y,maze2_width,maze2_height)
            rect(b_x,d_y,maze2_width,maze2_height)
            rect(c_x,d_y,maze2_width,maze2_height)
            rect(d_x,d_y,maze2_width,maze2_height)
            rect(b_x,d_y,maze2_width,maze2_height)
            rect(a_x,e_y,maze2_width,maze2_height)
            rect(b_x,d_y,maze1_width,maze1_height)
            rect(b_x,b_y,maze1_width,maze1_height)
            rect(b_x,e_y,maze1_width,maze1_height)
            rect(c_x,d_y,maze1_width,maze1_height)
            rect(c_x,e_y,maze2_width,maze2_height)
            rect(c_x,f_y,maze2_width,maze2_height)
            rect(d_x,f_y,maze2_width,maze2_height)
            rect(c_x,f_y,maze1_width,maze1_height)
            rect(b_x,g_y,maze2_width,maze2_height)
            rect(c_x,g_y,maze2_width,maze2_height)
            rect(b_x,h_y,maze2_width,maze2_height)
            rect(d_x,h_y,maze2_width,maze2_height)
            rect(b_x,i_y,maze2_width,maze2_height)
            rect(b_x,k_y,maze2_width,maze2_height)
            rect(b_x,g_y,maze1_width,maze1_height)
            rect(d_x,g_y,maze1_width,maze1_height)
            rect(b_x,i_y,maze1_width,maze1_height)
            rect(b_x,j_y,maze1_width,maze1_height)
            rect(c_x,j_y,maze1_width,maze1_height)
            rect(e_x,e_y,maze1_width,maze1_height)
            rect(e_x,f_y,maze1_width,maze1_height)
            rect(e_x,e_y,maze2_width,maze2_height)
            rect(e_x,g_y,maze2_width,maze2_height)
            rect(g_x,k_y,maze2_width,maze2_height)
            rect(h_x,k_y,maze2_width,maze2_height)

            rect(d_x,i_y,maze1_width,maze1_height)
            rect(e_x,i_y,maze1_width,maze1_height)
            rect(e_x,j_y,maze1_width,maze1_height)
            rect(f_x,h_y,maze1_width,maze1_height)
            rect(f_x,j_y,maze1_width,maze1_height)
            rect(g_x,c_y,maze1_width,maze1_height)
            rect(g_x,d_y,maze1_width,maze1_height)
            rect(g_x,f_y,maze1_width,maze1_height)
            rect(g_x,h_y,maze1_width,maze1_height)
            rect(h_x,l_y,maze1_width,maze1_height)
            rect(h_x,c_y,maze1_width,maze1_height)
            rect(h_x,h_y,maze1_width,maze1_height)
            rect(i_x,c_y,maze1_width,maze1_height)
            rect(i_x,e_y,maze1_width,maze1_height)
            rect(i_x,f_y,maze1_width,maze1_height)
            rect(i_x,g_y,maze1_width,maze1_height)
            rect(i_x,h_y,maze1_width,maze1_height)
            
            rect(i_x,j_y,maze1_width,maze1_height)
            rect(j_x,b_y,maze1_width,maze1_height)
            rect(j_x,d_y,maze1_width,maze1_height)
            rect(j_x,e_y,maze1_width,maze1_height)
            rect(j_x,g_y,maze1_width,maze1_height)
            rect(d_x,j_y,maze2_width,maze2_height)
            rect(e_x,i_y,maze2_width,maze2_height)

            rect(f_x,b_y,maze2_width,maze2_height)
            rect(f_x,d_y,maze2_width,maze2_height)
            rect(f_x,h_y,maze2_width,maze2_height)
            rect(f_x,j_y,maze2_width,maze2_height)
            rect(f_x,k_y,maze2_width,maze2_height)

            rect(g_x,f_y,maze2_width,maze2_height)
            rect(g_x,g_y,maze2_width,maze2_height)
            rect(g_x,i_y,maze2_width,maze2_height)

            rect(h_x,b_y,maze2_width,maze2_height)
            rect(h_x,d_y,maze2_width,maze2_height)
            rect(h_x,e_y,maze2_width,maze2_height)
            rect(h_x,f_y,maze2_width,maze2_height)
            rect(h_x,h_y,maze2_width,maze2_height)
            rect(h_x,j_y,maze2_width,maze2_height)

            rect(i_x,b_y,maze2_width,maze2_height)
            rect(i_x,c_y,maze2_width,maze2_height)
            rect(i_x,d_y,maze2_width,maze2_height)
            rect(i_x,h_y,maze2_width,maze2_height)

            rect(j_x,j_y,maze1_width,maze1_height)
            rect(k_x,b_y,maze1_width,maze1_height)
            rect(k_x,e_y,maze2_width,maze2_height)
            rect(k_x,f_y,maze1_width,maze1_height)
            rect(k_x,g_y,maze1_width,maze1_height)
            rect(k_x,i_y,maze1_width,maze1_height)
            rect(k_x,j_y,maze1_width,maze1_height)

            rect(j_x,i_y,maze2_width,maze2_height)
            rect(l_x,j_y,maze1_width,maze1_height)
            rect(l_x,j_y,maze1_width,maze1_height)
            rect(k_x,d_y,maze1_width,maze1_height)
            rect(l_x,h_y,maze1_width,maze1_height)
            rect(l_x,d_y,maze1_width,maze1_height)
            rect(k_x,f_y,maze2_width,maze2_height)
            rect(l_x,g_y,maze2_width,maze2_height)
            rect(k_x,j_y,maze2_width,maze2_height)

            rect(k_x,b_y,maze2_width,maze2_height)
            rect(l_x,b_y,maze2_width,maze2_height)
            rect(k_x,c_y,maze2_width,maze2_height)
            rect(l_x,d_y,maze2_width,maze2_height)
            rect(k_x,h_y,maze2_width,maze2_height)
            rect(l_x,i_y,maze2_width,maze2_height)
            
            image(student2_img,x,y,student2_width,student2_height)
            image(door_img,x1,y1,80,80)

            if(keyIsDown(RIGHT_ARROW))
            {
                x = x + 3  
                  
        
            }

            else if(keyIsDown(LEFT_ARROW))
            {
                x = x - 3 
          
            
            }

            if(keyIsDown(UP_ARROW))
            {
                y = y - 3  
                  
        
            }

            else if(keyIsDown(DOWN_ARROW))
            {
                y = y + 3 
          
            
            }

            if(x<-10)
            {
                x=-10
            }

            else if(x>width-student2_width)
            {
                x=780
            }

            if(y<0)
            {
                y=0
            }

            else if( y>600-student2_height )
            {
                y=555
            }

            if ( x+student2_width >= x1 && y+student2_height >= y1)
            {
                CurrentScreen = GAME_SCREEN_8
            }
            
    
    




        }
        break;

        case GAME_SCREEN_8:
        {
            const secret2_left = 700
            const secret2_top = 450
            const secret2_width = 60
            const secret2_height = 60

            background(teachersroom_img)
            fill(0,0,0,170)
            rect(0,0,840,600)
            image(hand_img,mouseX-50,mouseY-50,120,120)
            fill('black')
            rect(0,0,840,90)
            fill('white')
            textSize(45)
            textStyle(BOLDITALIC)
            text("Let's find my smartphone",140,43)
            textSize(30)
            text("Press anywhere.",140,80)
            fill(0,0,0,0)
            noStroke()
            rect(secret2_left,secret2_top,secret2_width,secret2_height)

            if (mouseIsPressed == true && mouseWasPressed == false)
            {

                {
                const mouse_is_within_X_range = mouseX >=  secret2_left && mouseX <  secret2_left +  secret2_width;
                const mouse_is_within_Y_range = mouseY >  secret2_top && mouseY <  secret2_top +  secret2_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_9;
                }
       
                }
               

            }
        }
        break;

        case GAME_SCREEN_9:
        {
            let next_button_left = 720
            let next_button_top = 20
            let next_button_width = 100
            let next_button_height = 50

            background(teachersroom_img)
            fill(0,0,0,170)
            rect(0,0,840,600)
            image(smartphone_img,width/4+50,height/4,300,300)
            fill('black')
            rect(next_button_left,next_button_top,next_button_width,next_button_height)
            rect(0,530,840,70)
            fill('white')
            textSize(45)
            textStyle(BOLDITALIC)
            text("Let's go home now",200,580)
            textSize(40)
            text("next",722,55)

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  next_button_left && mouseX <  next_button_left +  next_button_width;
                const mouse_is_within_Y_range = mouseY >  next_button_top && mouseY <  next_button_top +  next_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_10;
                }
       
                }
               

            }

        }
        break;

        case GAME_SCREEN_10:
        {
            

            const gap_width = 10;
            const ground_height = 150;
            const ground_y = height - 1.1*ground_height;
            const ground_width = 200;
            let ground_x = gap_width;

            const window_height = 120;
            const window_width = 120;
            const window_gap = 250;
            let window_x = 0;
            const window_y = height/4;
            const CAMERA_SPEED = 200;

            
            translate(-camera_x,-camera_y);

            image(running_img,running_x,running_y,120,120)

            //ground
            fill(64,35,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(94,47,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(64,35,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(94,47,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(64,35,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(94,47,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(64,35,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(94,47,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(64,35,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(94,47,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(64,35,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(94,47,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(64,35,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            fill(94,47,0)
            rect(ground_x,ground_y,ground_width,ground_height)
            ground_x += gap_width + ground_width;
            
            image(door_img,2510,280,150,150)
            image(ghost_img,ghost_x,ghost_y,100,100)

            //window
            image(window_img,window_x,window_y,window_width,window_height)
            window_x += window_gap + window_width;
            image(window_img,window_x,window_y,window_width,window_height)
            window_x += window_gap + window_width;
            image(window_img,window_x,window_y,window_width,window_height)
            window_x += window_gap + window_width;
            image(window_img,window_x,window_y,window_width,window_height)
            window_x += window_gap + window_width;
            image(window_img,window_x,window_y,window_width,window_height)
            window_x += window_gap + window_width;
            image(window_img,window_x,window_y,window_width,window_height)
            window_x += window_gap + window_width;
            image(window_img,window_x,window_y,window_width,window_height)
            window_x += window_gap + window_width;

            fill(0,0,0,120)
            rect(0,0,10000,600)
            ghost_x = ghost_x + 4.01

            if(keyIsDown(RIGHT_ARROW))
            {
                running_x = running_x + 4  
                camera_x += CAMERA_SPEED * ( deltaTime / 1000 );
                   
            }

            if ( running_x >= 2510)
            {
                CurrentScreen = GAME_SCREEN_11
            }

            if ( ghost_x >= running_x && ghost_y >= running_y )
            {
                CurrentScreen = GAME_SCREEN_12
            }
                    
        

        }
        break;

        case GAME_SCREEN_11:
        {
            let next_button_left = 720
            let next_button_top = 320
            let next_button_width = 100
            let next_button_height = 50

            background(ground_img)
            fill(0,0,0,170)
            rect(0,0,840,600)
            image(student_img,470,30,350,270)
            rect(0,300,840,300)
            textSize(30)
            fill('white')
            text('I finally escaped from school!', 70,420)
            text("Let's head back home.",70,460)
            push()
            textStyle(BOLDITALIC)
            text('David', 70,350)
            fill('white')
            rect(next_button_left,next_button_top,next_button_width,next_button_height)
            fill('black')
            text('next',735,355)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  next_button_left && mouseX <  next_button_left +  next_button_width;
                const mouse_is_within_Y_range = mouseY >  next_button_top && mouseY <  next_button_top +  next_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_13;
                }
       
                }
               

            }
        }
        break;

        case GAME_SCREEN_12:
        {
            let next_button_left = 720
            let next_button_top = 20
            let next_button_width = 100
            let next_button_height = 50

            background(ghost2_img)

            textStyle(BOLDITALIC)
            textSize(30)
            fill('white')
            rect(next_button_left,next_button_top,next_button_width,next_button_height)
            fill('black')
            text('Back',735,55)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  next_button_left && mouseX <  next_button_left +  next_button_width;
                const mouse_is_within_Y_range = mouseY >  next_button_top && mouseY <  next_button_top +  next_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = GAME_SCREEN_10;
                }
       
                }
               

            }
        }
        break;

        case GAME_SCREEN_13:
        {

            let next_button_left = 720
            let next_button_top = 20
            let next_button_width = 100
            let next_button_height = 50

            fill('black')
            rect(0,0,840,600)
            fill('white')
            textSize(50)
            text("SUCCESS",320,height/2)

            textStyle(BOLDITALIC)
            textSize(30)
            fill('white')
            rect(next_button_left,next_button_top,next_button_width,next_button_height)
            fill('black')
            text('Home',725,55)
            pop()

            if (mouseIsPressed == true && mouseWasPressed == false)
            {
                //next
                {
                const mouse_is_within_X_range = mouseX >=  next_button_left && mouseX <  next_button_left +  next_button_width;
                const mouse_is_within_Y_range = mouseY >  next_button_top && mouseY <  next_button_top +  next_button_height;
                if (mouse_is_within_X_range && mouse_is_within_Y_range )
                {
                    CurrentScreen = MAIN_MENU;
                }
       
                }
               

            }
        }
        break;

        case MENU_SCREEN: 
        {
            background(school2_img)
            fill(0,0,0,150)
            rect(0,0,840,600)
            textSize(60)
            fill(255,255,255,150)
            rect(0,100,840,600)
            text('Menu',70,100)  
        }
        break;



    
    }
}
