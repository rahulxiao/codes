import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    // Debug: Log the data being sent
    console.log('Login attempt for email:', email);
    
    // Forward the request to your NestJS backend using axios directly
    const response = await axios.post('http://localhost:3333/buyer/login', {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    // Debug: Log response details
    console.log('Backend response status:', response.status);
    console.log('Backend response data:', response.data);

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    console.error('Login proxy error:', error);
    
    // Handle axios error response
    if (error.response) {
      return NextResponse.json(
        { 
          message: error.response.data?.message || 'Login failed', 
          details: error.response.data 
        },
        { status: error.response.status }
      );
    }
    
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
