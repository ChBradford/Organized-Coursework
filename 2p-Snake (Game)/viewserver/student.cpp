#include "ground.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

extern BGround_ BGround;

void draw_main(input input_info)
	{
		static int state = 0;	//State used before game begins
		if (state == 0)	//Main menu
		{
			draw_line(2, 2, 480, 2, 39, 99, 196, 2);		//top border
			draw_line(481, 459, 481, 0, 39, 99, 196, 2);	//right border
			draw_line(3, 0, 3, 460, 39, 99, 196, 2);		//left border
			draw_line(0, 458, 480, 458, 39, 99, 196, 2);	//bottom border
			char text[100];
			sprintf(text, "Light Racer");
			draw_text(text, 200, 120, 0, 0, 0);
			sprintf(text, "Start: W");
			draw_text(text, 200, 200, 0, 0, 0);
			sprintf(text, "Quit: S");
			draw_text(text, 205, 230, 0, 0, 0);
			if (input_info.w_key_down == 1)	//If w is pressed game will commence
			{
				state = 1; 
			}
			if (input_info.s_key_down == 1)
			{
				PostQuitMessage(0);
			}
		}
		if (state == 1) //state=1 so game will begin
		{
			static int init1 = 0;
			if (init1 == 0)
			{
				init1 = 1;
				start_music("Music.mp3");	//Starts music
			}
			static int lives = 3;
			static int lives2 = 3;
			static int field[500][500];
			static int init = 0;
			static int x;
			static int y;
			char text[100];
			static int score1 = 0;
			static int score2 = 0;
			char txt[100];
			draw_line(2, 2, 480, 2, 39, 99, 196, 2);		//top border
			draw_line(481, 459, 481, 0, 39, 99, 196, 2);	//right border
			draw_line(3, 0, 3, 460, 39, 99, 196, 2);		//left border
			draw_line(0, 458, 480, 458, 39, 99, 196, 2);	//bottom border
			sprintf(text, "Score: %d", score1);		//displays for score and lives for P1 and P2
			draw_text(text, 40, 65, 0, 0, 0);
			sprintf(text, "Score: %d", score2);
			draw_text(text, 120, 65, 0, 0, 0);
			sprintf(text, "P1 lives:  %d", lives);		
			draw_text(text, 40, 40, 0, 0, 0);
			sprintf(text, "P2 lives:  %d", lives2);
			draw_text(text, 120, 40, 0, 0, 0);
			static int px = 350, py = 350;
			static int px1 = 200, py1 = 200;
			field[px][py] = 1;    
			score1++;				//Score begins counting
			field[px1][py1] = 1;
			score2++;				//Score begins counting
			if (init == 0)
			{
				init = 1;
				for (int x = 0; x < 500; x++)		//setting the field to 0
				{
					for (int y = 0; y < 500; y++)
					{
						field[x][y] = 0;
					}
				}
			}
			draw_pixel(px1, py1, 16, 29, 181, 1); //line for player 2
			static int direction2 = 4; //setting up direction for player 2
			if (input_info.r_button_down == 1)
			{
				PostQuitMessage(0);
			}
			else if (input_info.left_cursor_down == 1)
			{
				if (direction2 != 4)
					direction2 = 1;
			}
			else if (input_info.up_cursor_down == 1)
			{
				if (direction2 != 3)
					direction2 = 2;
			}
			else if (input_info.down_cursor_down == 1)
			{
				if (direction2 != 2)
					direction2 = 3;
			}
			else if (input_info.right_cursor_down == 1)
			{
				if (direction2 != 1)
					direction2 = 4;
			}
			if (direction2 == 1)
			{
				px1--;
			}
			else if (direction2 == 2)
			{
				py1--;
			}
			else if (direction2 == 3)
			{
				py1++;
			}
			else if (direction2 == 4)
			{
				px1++;
			}
			draw_pixel(px, py, 24, 188, 92, 1);	//Player 1's line
			static int direction = 1;	//player 1's directions
			if (input_info.r_button_down == 1)
			{
				PostQuitMessage(0);
			}
			else if (input_info.a_key_down == 1)
			{
				if (direction != 4)
					direction = 1;
			}
			else if (input_info.w_key_down == 1)
			{
				if (direction != 3)
					direction = 2;
			}
			else if (input_info.s_key_down == 1)
			{
				if (direction != 2)
					direction = 3;
			}
			else if (input_info.d_key_down == 1)
			{
				if (direction != 1)
					direction = 4;
			}
			if (direction == 1)
			{
				px--;
			}
			else if (direction == 2)
			{
				py--;
			}
			else if (direction == 3)
			{
				py++;
			}
			else if (direction == 4)
			{
				px++;
			}
			if (px == 0 || px == 484)		//player 1 left and right boundaries
			{
				lives = lives - 1;
				score1 = score1 - 100;
				draw_text(text, 40, 40, 0, 0, 0);
				if (init == 1)
				{
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							draw_pixel(x, y, 255, 255, 255, 255);
						}
					}
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							field[x][y] = 0;
						}
					}
					px = 350, py = 350;
				}
				if (lives < 0)
				{
					PostQuitMessage(0);
				}
			}
			if (py == 0 || py == 468) //player 1's top and bottom boundaries
			{
				lives = lives - 1;
				score1 = score1 - 100;
				draw_text(text, 40, 40, 0, 0, 0);
				if (init == 1)
				{
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							draw_pixel(x, y, 255, 255, 255, 255);
						}
					}
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							field[x][y] = 0;
						}
					}
					px = 250, py = 250;
					if (lives < 0)
					{
						PostQuitMessage(0);
					}
				}
			}

			if (py1 == 0 || py1 == 468)	//Player 2's top and bottom boundaries
			{
				lives2 = lives2 - 1;
				score2 = score2 - 100;
				draw_text(txt, 120, 40, 0, 0, 0);
				if (init == 1)
				{
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							draw_pixel(x, y, 255, 255, 255, 255);
						}
					}
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							field[x][y] = 0;
						}
					}
					px1 = 200, py1 = 200;
					if (lives2 < 0)
					{
						PostQuitMessage(0);
					}
				}
			}
			if (px1 == 0 || px1 == 484) //Player 2's top and bottom boundaries
			{
				lives2 = lives2 - 1;
				score2 = score2 - 100;
				draw_text(txt, 120, 40, 0, 0, 0);
				if (init == 1)
				{
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							draw_pixel(x, y, 255, 255, 255, 255);
						}
					}
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							field[x][y] = 0;
						}
					}
					px1 = 200, py1 = 200;
				}
				if (lives2 < 0)
				{
					PostQuitMessage(0);
				}
			}


			if (field[px][py] == 1 && (direction == 1 || direction == 2 || direction == 3 || direction == 4)) //player 1's boundaries for running into itself
			{
				lives = lives - 1;
				score1 = score1 - 100;
				draw_text(text, 40, 40, 0, 0, 0);
				if (init == 1)
				{
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							draw_pixel(x, y, 255, 255, 255, 255);
						}
					}
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							field[x][y] = 0;
						}
					}
					px = 350, py = 350;
					px1 = 200, py1 = 200;
				}
				if (lives < 0)
				{
					PostQuitMessage(0);
				}
			}
			if (field[px1][py1] == 1 && (direction2 == 1 || direction2 == 2 || direction2 == 3 || direction2 == 4))	//player 2's boundaries for running into itself
			{
				lives2 = lives2 - 1;
				score2 = score2 - 100;
				draw_text(txt, 120, 40, 0, 0, 0);
				if (init == 1)
				{
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							draw_pixel(x, y, 255, 255, 255, 255);
						}
					}
					for (int x = 0; x < 500; x++)
					{
						for (int y = 0; y < 500; y++)
						{
							field[x][y] = 0;
						}
					}
					px = 350, py = 350;
					px1 = 200, py1 = 200;
				}
				if (lives2 < 0)
				{
					PostQuitMessage(0);
				}
			}
		}
	}
