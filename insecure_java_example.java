import java.io.*;

public class SerializeCookie {
  public static void main(String[] args) {
    Cookie cookieObj = new Cookie();
    cookieObj.setValue("alice");
    
    try {
      FileOutputStream fos = new FileOutputStream("cookies.ser");
      ObjectOutputStream oos = new ObjectOutputStream(fos);
      oos.writeObject(cookieObj);
      oos.close(); 
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
