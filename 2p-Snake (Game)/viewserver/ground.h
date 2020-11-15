#define WIN32_LEAN_AND_MEAN  
#include <windows.h>
#include <windowsx.h>
#include <malloc.h>
#include <stdio.h>
#include <conio.h>
#include <io.h>
#include <time.h>
#include <stdlib.h>
#include <sys/timeb.h>
#include <fstream>
using namespace std;
#include <direct.h>
#include <commdlg.h>
#include <malloc.h>
#include <cmath>
#include <string.h>
#include <tchar.h>
#include <vector>

void start_music(char *file);

class vec3d
{
public:
	float x, y, z;
	vec3d(float x_, float y_, float z_)
	{
		x = x_;
		y = y_;
		z = z_;
	
	}
	vec3d()
	{
		
	}
};
class matrix
{
public:
	float _11, _12, _13;
	float _21, _22, _23;
	float _31, _32, _33;

	matrix()
	{
		_11 = 1; _12 = _13 = 0;
		_21 = 0; _22 = 1;  _23 = 0;
		_31 = _32 = 0; _33 = 1;
	}
	void set_rotation(float zw)
	{
		_11 = cos(zw);	_12 = -sin(zw);
		_21 = sin(zw);	_22 = cos(zw);
	}

};
vec3d operator*(matrix m, vec3d v);
vec3d operator-(vec3d lhs, vec3d rhs);
vec3d operator+(vec3d lhs, vec3d rhs);
float get_angle(vec3d evec);

class smartdraw_
	{
	private:
		HWND failsavehwnd;
		HDC m_dc, m_DC;
		HBITMAP hbmMem, hbmOld;
		PAINTSTRUCT *ps;
		bool sub_dc;
		RECT drawrect;
	public:
		smartdraw_()
			{
			sub_dc = FALSE;
			failsavehwnd = NULL;
			ps = NULL;
			m_dc = m_DC = NULL;
			}
		~smartdraw_()
			{
			if (failsavehwnd)
				end();
			}
		HDC begin(HWND hwnd, HDC dc_parent, COLORREF bg, RECT rect)
			{
			failsavehwnd = hwnd;
			sub_dc = TRUE;
			m_DC = dc_parent;
			m_dc = CreateCompatibleDC(m_DC);
			RECT rc;
			GetClientRect(hwnd, &rc);
			hbmMem = CreateCompatibleBitmap(m_DC, rc.right - rc.left, 2000);
			hbmOld = (HBITMAP)SelectObject(m_dc, hbmMem);
			HBRUSH hbrBkGnd = CreateSolidBrush(bg);
			FillRect(m_dc, &rc, hbrBkGnd);
			DeleteObject(hbrBkGnd);
			drawrect = rect;
			ps = NULL;
			return m_dc;
			}
		HDC begin(HWND hwnd, PAINTSTRUCT *PaintStruct, COLORREF bg)
			{
			ps = PaintStruct;
			failsavehwnd = hwnd;
			m_DC = BeginPaint(hwnd, PaintStruct);
			m_dc = CreateCompatibleDC(m_DC);
			RECT rc;
			GetClientRect(hwnd, &rc);
			hbmMem = CreateCompatibleBitmap(m_DC, rc.right - rc.left, 2000);
			hbmOld = (HBITMAP)SelectObject(m_dc, hbmMem);
			HBRUSH hbrBkGnd = CreateSolidBrush(bg);
			FillRect(m_dc, &rc, hbrBkGnd);
			DeleteObject(hbrBkGnd);
			return m_dc;
			}

		void end()
			{
			RECT rc;
			if (!failsavehwnd)return;
			GetClientRect(failsavehwnd, &rc);
			if (m_DC && m_dc)
				{
				if (!sub_dc)	BitBlt(m_DC, rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top, m_dc, 0, 0, SRCCOPY);
				else			BitBlt(m_DC, drawrect.left, drawrect.top, drawrect.right, drawrect.bottom, m_dc, drawrect.left, drawrect.top, SRCCOPY);
				}
			SelectObject(m_dc, hbmOld);
			if (hbmMem)	DeleteObject(hbmMem);
			if (m_dc)	DeleteDC(m_dc);
			if (ps)		EndPaint(failsavehwnd, ps);
			failsavehwnd = NULL;
			}
	};


class input
	{
	public:
	int l_button_down;		//left mouse button down	1 .. down	0 .. up
	int r_button_down;		//right mouse button down	1 .. down	0 .. up
	int x_mouse;			//mouse coordinates in the window (x)
	int y_mouse;			//mouse coordinates in the window (y)
	int w_key_down;			//w key down	1 .. down	0 .. up
	int a_key_down;		//a key down	1 .. down	0 .. up
	int s_key_down;		//s key down	1 .. down	0 .. up
	int d_key_down;		//d key down	1 .. down	0 .. up
	int up_cursor_down;		//cursor up key down	1 .. down	0 .. up
	int down_cursor_down;	//cursor down key down	1 .. down	0 .. up
	int left_cursor_down;	//cursor left key down	1 .. down	0 .. up
	int right_cursor_down;	//cursor right key down	1 .. down	0 .. up
	input()
	{
		 l_button_down = 0;		//left mouse button down	1 .. down	0 .. up
		 r_button_down = 0;		//right mouse button down	1 .. down	0 .. up
		 x_mouse = 0;			//mouse coordinates in the window (x)
		 y_mouse = 0;			//mouse coordinates in the window (y)
		 w_key_down = 0;			//w key down	1 .. down	0 .. up
		 a_key_down = 0;		//a key down	1 .. down	0 .. up
		 s_key_down = 0;		//s key down	1 .. down	0 .. up
		 d_key_down = 0;		//d key down	1 .. down	0 .. up
		 up_cursor_down = 0;		//cursor up key down	1 .. down	0 .. up
		 down_cursor_down = 0;	//cursor down key down	1 .. down	0 .. up
		 left_cursor_down = 0;	//cursor left key down	1 .. down	0 .. up
		 right_cursor_down = 0;	//cursor right key down	1 .. down	0 .. up
	}
	};

void draw_main(input input_info);
void draw_text(char text[], int x, int y, int r, int g, int b);
void draw_pixel(int x, int y, int r, int g, int b, int draw_into_background);
void draw_line(int x, int y, int a, int b, int red, int green, int blue, int width);
void set_background(int r, int g, int b);


class sprite_
	{
	private:
	public:	
		int rot;
		int xlen,ylen;		// Dimensions
		int BytesPerRow;
	
		int posx, posy;
		char *data;				// Bits of the Image.
		char *Rot;
		sprite_()
			{
			rot = 0;
			BytesPerRow = 0;
			xlen = ylen = 0;
			data = 0;
			Rot = NULL;
			posx= posy = 0;
			}
		void rotate(float w, BYTE bg_rgb)
		{

			if (!data)return;
			//memcpy(Rotate , Raster, BytesPerRow*Height);

			memset(Rot, bg_rgb, BytesPerRow*ylen);
			vec3d v, half = vec3d((float)xlen / 2, (float)ylen / 2, 0);
			matrix R, T, Ti;
			//T = GetTransMatrix(-half);
			//Ti = GetTransMatrix(half);
			R.set_rotation(w);
		//D3DXMATRIX M = T*R*Ti;
			UCHAR r, g, b;
			for (int xx = 0; xx<xlen; xx++)
				for (int yy = 0; yy < ylen; yy++)
				{
					v = vec3d(xx, yy, 0);
					v = v - half;
					
					v = R * v;

					v = v + half;
					if (v.x<0 || v.y<0 || v.x>=xlen || v.y>=ylen) continue;
					
					int resx = ceil(v.x);
					int resy = ceil(v.y);


					int rx = resx * 3 + resy*xlen * 3 + 2;
					int ry = resx * 3 + resy*xlen * 3 + 1;
					int rz = resx * 3 + resy*xlen * 3 + 0;

					int ox = xx * 3 + yy*xlen * 3 + 2;
					int oy = xx * 3 + yy*xlen * 3 + 1;
					int oz = xx * 3 + yy*xlen * 3 + 0;

					if (resx<0 || resy<0 || resx >= xlen || resy >= ylen)
						continue;
					

					BYTE r = data[rx];
					BYTE g = data[ry];
					BYTE b = data[rz];
					if (r == 0 && r == 0 && g == 0)
						continue;
					


					Rot[ox] = r;
					Rot[oy] = g;
					Rot[oz] = b;



				}


		}
		void load(char *file)
			{
			
				if (data) delete[] data;
				data = 0;
				
				BITMAPFILEHEADER bmfh;
				BITMAPINFOHEADER bmih;
				BITMAPINFO *pbmi;		// BITMAPINFO structure
				RGBQUAD * Palette;		// RGB Palette for the image.

				FILE *pp = fopen(file, "rb");
				if (!pp) return;
				fclose(pp);
				// Open file.
				ifstream bmpfile(file, ios::in | ios::binary);
				if (!bmpfile.is_open()) return;		// Error opening file

														// Load bitmap fileheader & infoheader
				bmpfile.read((char*)&bmfh, sizeof(BITMAPFILEHEADER));
				bmpfile.read((char*)&bmih, sizeof(BITMAPINFOHEADER));

				// Check filetype signature
				if (bmfh.bfType != 'MB') return;		// File is not BMP

														// Assign some short variables:
				int BPP = bmih.biBitCount;
				xlen = bmih.biWidth;
				ylen = (bmih.biHeight>0) ? bmih.biHeight : -bmih.biHeight; // absoulte value
				BytesPerRow = xlen * BPP / 8;
				BytesPerRow += (4 - BytesPerRow % 4) % 4;	// int alignment
				
															// If BPP aren't 24, load Palette:
				if (BPP == 24)
					{
					pbmi = (BITMAPINFO*)new char[sizeof(BITMAPINFO)];
					}
				else
					{
					pbmi = (BITMAPINFO*) new char[sizeof(BITMAPINFOHEADER) + (1 << BPP)*sizeof(RGBQUAD)];
					Palette = (RGBQUAD*)((char*)pbmi + sizeof(BITMAPINFOHEADER));
					bmpfile.read((char*)Palette, sizeof(RGBQUAD) * (1 << BPP));
					}
				pbmi->bmiHeader = bmih;

				// Load Raster
				bmpfile.seekg(bmfh.bfOffBits, ios::beg);
				data = new char[BytesPerRow*ylen];
				Rot = new char[BytesPerRow*ylen];
			
				// (if height is positive the bmp is bottom-up, read it reversed)
				if (bmih.biHeight>0)
					for (int n = ylen - 1; n >= 0; n--)
						bmpfile.read(data + BytesPerRow*n, BytesPerRow);
				else
					bmpfile.read(data, BytesPerRow*ylen);

				// so, we always have a up-bottom raster (that is negative height for windows):
				pbmi->bmiHeader.biHeight = -ylen;
				bmpfile.close();
				memcpy(Rot, data, BytesPerRow*ylen);
				
			}
	};

//////////////////////////////
//allmighty bground class
//



class BGround_
{
private:

	float difference(float a, float b)
	{
		float c = a - b;
		c = fabs(c);
		return c;
	}
	int Width, Height;		// Dimensions
	int BPP;				// Bits Per Pixel.
	char *Raster;			// Bits of the Image.
	char *Img;			// Bits of the Image.
	RGBQUAD * Palette;		// RGB Palette for the image.
	int BytesPerRow;		// Row Width (in bytes).
	BITMAPINFO *pbmi;		// BITMAPINFO structure
	vector<sprite_*> sprites;
	void blackcpy(char *ziel, char *von, int p_anz)
	{
		//p_anz...pixelanz, also mal 3
		for (int ii = 0; ii<p_anz; ii++)
		{
			if ((von[3 * ii] == 0) && (von[3 * ii + 1] == 0) && (von[3 * ii + 2] == 0))continue;
			memcpy(ziel + 3 * ii, von + 3 * ii, 3);
		}
	}
public:
	void reset();
	void load_sprite(char *bmpfile)
	{
		sprite_ *ns = new sprite_;
		ns->load(bmpfile);
		sprites.push_back(ns);
	}
	int InsertBMPRot(sprite_ *spr, int x, int y)
	{
		x *= 3;
		int h = spr->ylen;
		int w = spr->xlen;
		if (x<0)x = 0;
		//if((x+w)>Width)x=Width-w;
		for (int ii = 0; ii<h; ii++)
		{
			if ((ii + y)<0) continue;
			blackcpy(Img + (ii + y)*BytesPerRow + x, spr->Rot + ii*spr->BytesPerRow, w);
		}
		return 0;
	}
	void set_sprite_position(int sprite_number, int x, int y, int flip = 0)
	{
		if (sprite_number < 0 || sprite_number >= sprites.size())return;
		sprite_ *ns = sprites[sprite_number];
		ns->posx = x-(ns->xlen /2);
		ns->posy = y- (ns->ylen / 2);
		ns->rot = flip;
	}
	void set_sprite_rotation(int sprite_number, float angle)
	{
		if (sprite_number < 0 || sprite_number >= sprites.size())return;
		sprite_ *ns = sprites[sprite_number];
		ns->rotate(-angle,0);
	}
	RECT get_Rect() { RECT rc; rc.bottom = Height; rc.right = Width; return rc; Img = NULL; }

	void set_background(int r, int g, int b)
	{
		for (int xx = 0; xx < Width; xx++)
		for (int yy = 0; yy < Height; yy++)
			set_pix(xx, yy, r, g, b);
	}

	// Member functions (defined later):
	int LoadBG(char * szFile)
	{
		if (Raster) delete[] Raster;
		if (pbmi)	delete[] pbmi;
		Raster = 0;
		pbmi = 0;

		BITMAPFILEHEADER bmfh;
		BITMAPINFOHEADER bmih;

		FILE *pp = fopen(szFile, "rb");
		if (!pp) return 1;
		fclose(pp);
		// Open file.
		ifstream bmpfile(szFile, ios::in | ios::binary);
		if (!bmpfile.is_open()) return 1;		// Error opening file

		// Load bitmap fileheader & infoheader
		bmpfile.read((char*)&bmfh, sizeof(BITMAPFILEHEADER));
		bmpfile.read((char*)&bmih, sizeof(BITMAPINFOHEADER));

		// Check filetype signature
		if (bmfh.bfType != 'MB') return 2;		// File is not BMP

		// Assign some short variables:
		BPP = bmih.biBitCount;
		Width = bmih.biWidth;
		Height = (bmih.biHeight>0) ? bmih.biHeight : -bmih.biHeight; // absoulte value
		BytesPerRow = Width * BPP / 8;
		BytesPerRow += (4 - BytesPerRow % 4) % 4;	// int alignment

		// If BPP aren't 24, load Palette:
		if (BPP == 24)
		{
			pbmi = (BITMAPINFO*)new char[sizeof(BITMAPINFO)];
		}
		else
		{
			pbmi = (BITMAPINFO*) new char[sizeof(BITMAPINFOHEADER)+(1 << BPP)*sizeof(RGBQUAD)];
			Palette = (RGBQUAD*)((char*)pbmi + sizeof(BITMAPINFOHEADER));
			bmpfile.read((char*)Palette, sizeof(RGBQUAD)* (1 << BPP));
		}
		pbmi->bmiHeader = bmih;

		// Load Raster
		bmpfile.seekg(bmfh.bfOffBits, ios::beg);
		Raster = new char[BytesPerRow*Height];
		Img = new char[BytesPerRow*Height * 2];

		// (if height is positive the bmp is bottom-up, read it reversed)
		if (bmih.biHeight>0)
		for (int n = Height - 1; n >= 0; n--)
			bmpfile.read(Raster + BytesPerRow*n, BytesPerRow);
		else
			bmpfile.read(Raster, BytesPerRow*Height);
		// so, we always have a up-bottom raster (that is negative height for windows):
		pbmi->bmiHeader.biHeight = -Height;
		bmpfile.close();

		return 0;
	}
	int InitBG24(int x, int y, int r, int g, int b)
	{
		if (Raster) delete[] Raster;
		if (pbmi)	delete[] pbmi;
		Raster = 0;
		pbmi = 0;



		Width = x;
		BPP = 24;
		Height = (y>0) ? y : -y; // absoulte value

		BytesPerRow = Width * BPP / 8;
		BytesPerRow += (4 - BytesPerRow % 4) % 4;	// int alignment


		pbmi = (BITMAPINFO*)new char[sizeof(BITMAPINFO)];



		Raster = new char[BytesPerRow*Height];
		Img = new char[BytesPerRow*Height * 2];

		set_background(r, g, b);

		pbmi->bmiHeader.biSize = 40;
		pbmi->bmiHeader.biWidth = Width;
		pbmi->bmiHeader.biHeight = -Height;
		pbmi->bmiHeader.biPlanes = 1;
		pbmi->bmiHeader.biBitCount = BPP;
		pbmi->bmiHeader.biCompression = 0;
		pbmi->bmiHeader.biSizeImage = Width * Height * 3 + 2;
		pbmi->bmiHeader.biXPelsPerMeter = 2834;
		pbmi->bmiHeader.biYPelsPerMeter = 2834;
		pbmi->bmiHeader.biClrUsed = 0;
		pbmi->bmiHeader.biClrImportant = 0;


		return 0;
	}
	//int InsertBMP(CRaster *img, int x, int y);
	//int InsertBMP(CRaster *img, int x, int y, int divfaktor);
	//	int InsertBMPRot(CRaster *img, int x, int y);
	//	int InsertBMPRot(CRaster *img, int x, int y, int divfaktor);
	int GDIPaint(HDC hdc, int x, int y)
	{
		if (!Img) return 0;
		// Paint the image to the device.
		return SetDIBitsToDevice(hdc, x, y, Width, Height, 0, 0,
			0, Height, (LPVOID)Img, pbmi, 0);
	}
	int start()
	{
		if (!Raster) return 0;
		if (!Img) return 0;
		memcpy(Img, Raster, BytesPerRow*Height);
		for (int ii = 0; ii < sprites.size(); ii++)
		{
			int swidth = sprites[ii]->xlen;
			int sheight = sprites[ii]->ylen;
			if (sprites[ii]->rot == 0)
				{
				for (int xx = 0; xx < swidth; xx++)
					for (int yy = 0; yy < sheight; yy++)
						{
						int tx = sprites[ii]->posx + xx;
						int ty = sprites[ii]->posy + yy;
						if (tx < 0 || ty < 0)
							continue;
						if (tx >= Width || ty >= Height)
							{
							xx = sprites[ii]->xlen;
							break;
							}
						BYTE r = sprites[ii]->Rot[xx * 3 + yy*swidth * 3 + 2];
						BYTE g = sprites[ii]->Rot[xx * 3 + yy*swidth * 3 + 1];
						BYTE b = sprites[ii]->Rot[xx * 3 + yy*swidth * 3 + 0];
						if (r == 0 && r == 0 && g == 0)
							continue;
						Img[tx * 3 + ty*Width * 3 + 0] = b;
						Img[tx * 3 + ty*Width * 3 + 1] = g;
						Img[tx * 3 + ty*Width * 3 + 2] = r;
						}
				}
			else if (sprites[ii]->rot == 1)
				{
				for (int xx = 0; xx < swidth; xx++)
					for (int yy = 0; yy < sheight; yy++)
						{
						int counterx = (swidth - xx - 1);
						int tx = sprites[ii]->posx + xx;
						int ty = sprites[ii]->posy + yy;
						if (tx < 0 || ty < 0)
							continue;
						if (tx >= Width || ty >= Height)
							{
							xx = swidth;
							break;
							}
						BYTE r = sprites[ii]->Rot[counterx * 3 + yy*swidth * 3 + 2];
						BYTE g = sprites[ii]->Rot[counterx * 3 + yy*swidth * 3 + 1];
						BYTE b = sprites[ii]->Rot[counterx * 3 + yy*swidth * 3 + 0];
						if (r == 0 && r == 0 && g == 0)
							continue;
						Img[tx * 3 + ty*Width * 3 + 0] = b;
						Img[tx * 3 + ty*Width * 3 + 1] = g;
						Img[tx * 3 + ty*Width * 3 + 2] = r;
						}
				}
			else if (sprites[ii]->rot == 2)
				{
				for (int xx = 0; xx < swidth; xx++)
					for (int yy = 0; yy < sheight; yy++)
						{
						int countery = (sheight - yy - 1);
						int tx = sprites[ii]->posx + yy;
						int ty = sprites[ii]->posy + xx;
						if (tx < 0 || ty < 0)
							continue;
						if (tx >= Width || ty >= Height)
							{
							xx = swidth;
							break;
							}
						BYTE r = sprites[ii]->Rot[xx * 3 + countery*swidth * 3 + 2];
						BYTE g = sprites[ii]->Rot[xx * 3 + countery*swidth * 3 + 1];
						BYTE b = sprites[ii]->Rot[xx * 3 + countery*swidth * 3 + 0];
						if (r == 0 && r == 0 && g == 0)
							continue;
						Img[tx * 3 + ty*Width * 3 + 0] = b;
						Img[tx * 3 + ty*Width * 3 + 1] = g;
						Img[tx * 3 + ty*Width * 3 + 2] = r;
						}
				}
			
		}
		return 1;
	}
	BGround_() { Raster = NULL; pbmi = NULL; }
	~BGround_()
	{
		if (Raster)
			delete[]Raster;
		if (pbmi)
			delete[]pbmi;
	}
	//draws a pixel
	void set_pix(int x, int y, int r, int g, int b)
	{
		if (!Raster)
			return;
		if (x >= Width)return;
		if (x <0)return;
		if (y >= Height)return;
		if (y <0)return;

		Raster[x * 3 + Width*y * 3 + 0] = b;
		Raster[x * 3 + Width*y * 3 + 1] = g;
		Raster[x * 3 + Width*y * 3 + 2] = r;

	}
};


