"use client";
import React from "react";

type EditUserPageProps = {
  onClose: () => void;
};

export default function AccountEdit({ onClose }: EditUserPageProps) {
  return (
    <div>
      <h1>test</h1>
       <input 
                        name="name" 
                        placeholder="Name" 
                        className="input-field"/>

                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        className="input-field"/>

                    <input 
                        name="year" 
                        placeholder="Year"
                        className="input-field"/>

                    <input 
                        name="section" 
                        placeholder="Section" 
                        className="input-field"/>

                    <button type="submit" className="btn btn-blue">
                        Add User
                    </button>
    </div>
  );
}
